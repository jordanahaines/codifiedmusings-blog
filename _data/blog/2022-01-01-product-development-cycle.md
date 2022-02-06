---
template: BlogPost
path: /product-development-cycle
date: 2022-01-01T18:02:57.424Z
title: The Product Development Cycle
---

Delivering great product to customers is hard. Commonly, the product and design team thinks the software engineers cut the one feature that ties the product together because it “literally like quadruples our complexity”. The engineering team thinks the product is poorly specified. The operations team thinks the solution is over-engineered and difficult to roll out. And the leadership team just wants to know why the whole process is taking so darn long.

Great product management serves to placate these varied (and legitimate) concerns while still delivering a delightful product to end-users that is sorta on time and maybe even within budget.

As I tease out what makes great product management…great… in other posts, it’s worth taking a moment to explore the **product development lifecycle (PDL)**. In this post I will outline the 5 stages of the product development lifecycle and describe why the lifecycle as a whole is useful. In later posts I’ll dive deeper into each stage to discuss common pitfalls, what success *really* looks like, and how to best engage product stakeholders.

First: What the heck is this PDL thing?

# The Product Development Lifecycle

In a nutshell, the product development lifecycle includes everything that happens between when it becomes apparent a new feature is necessary to it being rolled out to customers and even iterated upon. Crucially, ideation is a part of the product development lifecycle, so the process often begins before what becomes the product even crosses anyone’s mind. The PDL can be broken down into 5 stages:

1. Identify the problem
2. Design a solution
3. Build and test the solution
4. Rollout!
5. Measure success and Iterate

<br/><br/>
## 1. Identify the Problem
**Tools for this stage:** [SCAMPER](https://www.mindtools.com/pages/article/newCT_02.htm), [Product Hypothesis](https://uxdesign.cc/how-to-create-rock-solid-product-design-hypotheses-a-step-by-step-guide-e2443d421f21)

Great product starts with a real problem. Unsuccessful products are often great solutions in search of a problem.  In this phase you’ll first identify the problem to be solved and then ideate solutions. Note that another way to think of the “problem” to be identified is actually as an opportunity: New products capitalize on the *opportunity* to solve a problem for users. 

Be wary of products that start as a solution (“Wouldn’t it be cool if we made a mobile app version of our website”) as oppose to a problem (“I noticed that most of our users abandon our site during registration, and most of our competitors have mobile apps that don’t require registration. Should we build a mobile app?”).

To rock problem identification:

- Ensure that the problem being solved is visible in data. For example, if the problem you are trying to solve is that people never return to your site after registering for an account, you should have clear abandonment and retention metrics that illustrate this problem. Identifying these metrics at the beginning is also important because their improvement is how you’ll ultimately measure success. Be wary of attempting to solve a problem that is not yet measured.
- Identify the stakeholders whose perspective you’ll need to design the perfect solution to the problem. This should include end-users, and may also include other product teams, company leadership, support, sales, and even marketing teams.

---

**At the end of this stage you will have:** A single clearly identified problem to be solved visible in data, including an idea of the KPIs that can be used to confirm the problem is solved.
 
<br/><br/>
## 2. Design a Solution

**Tools:** [SWOT](https://www.swotanalysis.com/blog/swot-analysis-on-a-product-or-service) and [RICE](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/)

Let the brainstorming begin! Ideate the solutions to the problem you’ve identified. In this stage, you should pay special attention to your [user personae](https://xd.adobe.com/ideas/process/user-research/putting-personas-to-work-in-ux-design/#:~:text=User%20personas%20are%20archetypical%20users,see%20in%20the%20example%20below).) (you have those defined, right?). This is especially important if multiple types of users face the problem you’ve outlined. Your solution should be a [Pareto improvement](https://www.investopedia.com/terms/p/paretoimprovement.asp): benefiting at least 1 type of user while not making things *worse* for any other persona. If you end up needing multiple solutions for your different personae, that’s okay!

Remember those 5th grade science fair projects? Turns out that just like in those projects, [thinking of new product in the form of a hypothesis](https://uxdesign.cc/how-to-create-rock-solid-product-design-hypotheses-a-step-by-step-guide-e2443d421f21) is super useful. Phrase each of your potential solutions in the form of a product hypothesis like the one below. This construct ensures you have a clearly identified problem, and that the proposed solution is a (potential) way to solve it. Your product hypotheses should take the form: *By doing <new product>, we will <solve problem> as measured by <KPI>.* Example product hypothesis:

> By automatically sending engagement texts from customer success team members, we can increase customer retention in the first week after account creation as measured by our daily customer retention KPI.
> 

Need help choosing the right solution? If you’re stuck, consider a framework like [RICE](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/) or [SWOT](https://www.swotanalysis.com/blog/swot-analysis-on-a-product-or-service) to evaluate and compare solutions. Ensure you have a solid product hypothesis for your final idea and then craft a Product Requirements Document (PRD) that articulates the goals, granular requirements, and implementation details for the product.

---

**At the end of this stage you will have:** A single product idea that you’ve decided to move forward with, and a few other candidates you considered. The final product idea has a clear product hypothesis and measurable goal, is specified through PRD/TSD, and has buy-in from all key stakeholders (including the end-users you - as PM - represent).

<br/><br/>
## 3. Build and Test the Solution

**Tools:** [Critical Path Method](https://asana.com/resources/critical-path-method) — [Shortcut](https://shortcut.com/); [Jira](https://www.atlassian.com/software/jira) — [PRD](https://www.productplan.com/glossary/product-requirements-document/).

Bad product teams spend all of their time on this stage. Great product teams realize that investing in the other four stages of the PLD makes this stage - building the solution - easier. So don’t start with this stage; don’t end with this stage. And if you find yourself dreading this stage, then you probably aren’t spending enough energy on the others (hint: Stage 2 is where to look first!).

In this stage you work closely with your design and engineering teams to bring the designed solution to fruition. Unless you’re directly writing code, your role during this stage verges into that of a project manager: keep the feature development on schedule.

You should be anticipating the challenges that will arise and circumventing them as best you can. This means:

- Ensuring any questions on the PRD receive swift and thorough answers.
- Ensuring all copy, messaging, and other “soft” parts of the specification are included before engineers need them.
- Providing swift feedback on features as they are completed so the engineering team can focus on building and iterating.

You’ll likely use some technical project management software like [Shortcut](https://shortcut.com/) or [Jira](https://www.atlassian.com/software/jira) during this stage to track the progress of features as they are built. These software provide tools like burn down charts and other velocity metrics that can help you see what components are on time or falling behind.

Don’t forget to test! I’m sure your engineering team only builds perfect bug-free products 😏. But even if they do, it’s important to test to ensure the product works as intended and actually achieves the vision set out in the product hypothesis. Get feedback from as many stakeholders as possible, including real end-users where you can (if you can’t, then your job is to represent them as you test yourself). Testing is complete when all stakeholders agree that the product is ready to be rolled out to newly delighted end-users.

---

**At the end of this stage you will have:** A built and tested prototype that is ready to roll out to at least some of your users.

<br/><br/>
## 4. Rollout

**Tools**: Internal Knowledge Base like [Notion](https://www.notion.so/), [Confluence](https://www.atlassian.com/software/confluence) or [Guru](https://www.getguru.com/)

The software is built! Time to deploy and then you’re done, right? Almost. Rolling out complex software requires a lot of coordination. As PM, it is your responsibility to ensure this coordination happens, that everyone knows that the new product *exists* as well as how to use it, and that reference materials exist for new customers/team members (or those that are apt to forget).

Ensure that your product update is well documented prior to launch. Expect people on your team and customers to ask some variation of “what the heck is this?” Instead of copying and pasting the same response over and over again, do yourself a favor and curate documentation ahead of time in a knowledge base like [Notion](https://www.notion.so/), [Confluence](https://www.atlassian.com/software/confluence) or [Guru](https://www.getguru.com/) that you can link to. Particularly when the product changes internal operations, you may need to create separate public-facing documentation (for customers) and internal documentation (for ops/support teams).

PMs who were previously software engineers tend to underestimate the importance (and work required) of this stage. Engineers are used to “finishing” a product once the code is written and feature is tested. But the PM’s job is not done until product is built, actually used, and achieving success as laid out in your product hypothesis.

---

**At the end of this stage you will have:** Documentation for your team and end-users describing your new product and how it works. Support and operations teams will understand the new product in-depth, including any new tools at their disposal to support customers using the product.

<br/><br/>
## 5. Measure Success and Iterate

**Tools:** BI or KPI dashboards like [Datastudio](https://datastudio.google.com/u/0/) or [Looker](https://looker.com/) — Product Hypothesis (round2)

Even once your great new product is in the hands of end-users, your job is not done. Return to your product hypothesis from stage 2: What was the goal of this product again? How were you going to measure success?

It’s time to see your work pay off: Measure the KPIs you identified from stage 2 and compare them to where they were *before* your new product went live. An improvement in those indicators signifies a product success. Of course, the usual caveats of not confusing correlation with causation apply; if there were *other* initiatives that coincided with the launch of your product and could have affected your KPIs then you’ll need to adjust your assessment accordingly. If you’re really geeky, you can even test for a statistically significant improvement.

KPIs didn’t improve? Well that’s kind of a win, too. You found something that didn’t work, or at least didn’t work in the way it was built. This is where the “cycle” part of the Product Development Cycle comes into play. Circle back to those KPIs that have yet to be improved, and return to Stage 1 to define the problem and (in Stage 2) ideate solutions to build upon your success.

But be careful! One common PM pitfall is focusing only on product that isn’t working well. While this is important, don’t neglect further improving the parts of your product that are successful to make them even more so (more on this trade off later 😉).

---

**At the end of this stage you will have:** Measured the success of your new product against your product hypothesis and KPIs. Areas of further improvement - both in product that did and did not achieve its goal - are identified and you’re eager to jump into another go around the Product Development Cycle.