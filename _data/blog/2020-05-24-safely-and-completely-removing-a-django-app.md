---
template: BlogPost
path: /removing-django-app
date: 2020-05-24T18:02:57.424Z
title: (Safely and completely) Removing a Django App
thumbnail: /assets/untitled-drawing-1-.jpg
---
[Also posted on Medium](https://tldlife.com/safely-removing-a-django-app-17bdb2803200)

Removing a Django app often requires a lot more than just deleting the directory that contains it. This post describes the steps necessary to completely and safely remove an app (with models) from your Django project. We’ll be smart about when we search for dependencies and will create migrations to remove database tables for models that should be deleted.

To completely remove a Django app (with models), follow the steps below. Let’s pretend we’re removing an app called *note_app*:

1. *Search through your other apps for* `any note_app` imports. The easiest way to do this is a project-wide search for “from note_app”. You may want to exclude the note_app directory from your search.
2. Comment out all models in `note_app.models`*.*You may need to also remove entries from the `note_app.admin`file if you registered your note_appmodels with Django admin.
3. Look for and resolve errors when trying to run your Django app. P.S. You may have missed some model imports in step 1.
4. Note that depending on how you define ForeignKey, OneToOne and ManyToMany fields, youmay have missed some keys to your *note_app* models in step 1. It’s important that any fields that point to `note_app.models` from models in other apps need to be deleted before you continue. Take a minute to make sure none of these fields were missed; if they were, then delete those fields that remain and create migrations that will remove the fields from your database.
5. Run*makemigrations*. This should create a*note_app*migration that deletes all of the models*you*just commended out. This migration should also remove fields referring to*note_app*models from models in other apps.
6. Run your migrations. You must run your migrations in all environments (including production) **BEFORE** youdelete the app directory. The migrations that remove your app’s models from the database will be — surprise — in your *note_app* directory. If you delete the app directory prematurely, you will delete these migrations before they have a chance to clean up your database.
7. You may get a notice that the content types for your deleted models are stale. When asked whether or not you want to delete these content types, reply “yes”
8. Git Tip: Commit your migrations, take note of the commit, and then create a separate commit that deletes the *note_app* directory. When you are ready to apply your changes in a staging or production environment, checkout the commit you noted, run the migration, and then checkout the latest commit to delete the app directory. Your first commit should still have `note_app`in INSTALLED_APPS.
9. Delete the directory that contains the *note_app*.
10. Remove `note_app`from your INSTALLED_APPS setting.

And that’s really about it…super easy :) For a simple app, the steps above should suffice and you’ll quickly be on your merry way without an obsolete app weighing you down. However, in projects with lots of connections between apps, there are a few gotchyas that you may have to deal with:

# Migration Dependencies

Issues can arise when other apps’ migrations depend on migrations in the *notes_app* we just deleted. If you have this issue, you’ll realize right away. Upon trying to run your dev server or apply migrations, you’ll see a NodeNotFoundError specifying the missing dependency. To solve this issue, open the offending migration (it appears right after the “NodeNotFoundError:”). You should find a *notes_app* migration listed in the list of dependencies, and will also find some fields that reference `note_app.models` in the list of operations.

First comment out the operations that reference your deleted app (in our example: *note_app*). Then, comment out the dependency at the top that references a migration in your deleted app. I like to leave these entries commented out (instead of removing them) so that I can remember where the fields went if I have to dig into the migration again.

Note that, if you really found all of the keys in other apps referencing models in your deleted app, then the migrations you created in the steps above should include removing any fields that are referenced in the operations you just commented out.

# Deleting Multiple Apps at Once

Because of conflicts that can arise in multiple apps’ migrations, I’d strongly suggest removing multiple apps in series. Simply follow the steps above for each app, and then move on to cleaning up your fixtures and tests after all apps have been removed. Because the order that migrations run in is important, I highly recommend staying atomic in your commits. Each app removal should have its own commit(s) with migrations. You can then checkout each commit in order to run the migrations. The alternative is to remember the order in which migrations were created so you can manually apply them in order later. This gets messy because removing a single app often results in migrations for multiple other apps; removing multiple apps compounds this problem.

# Fixtures and Tests

You will no longer be able to use fixtures that include data for models (or model fields) that were removed. In practice, this usually means going through each fixture file by hand to find and remove old fields. Of course, you can also just recreate your fixtures entirely. Depending on how complex your data is, recreating fixtures may be the easier option :)

Your project is not finished until all of your tests pass again. If all you did was remove apps, you should’t need to add new tests. You may need to alter existing tests, especially if your removed apps also removed logic previously tested with integration tests. Because I often use fixtures for testing, most of my time getting tests to pass is really time spent fixing fixtures.