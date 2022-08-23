---
title: 'A conceptual guide for a web development API service'
date: '2021-05-01'
tags: ['technical writing', 'marketing']
description: "I worked with TakeShape to deliver a technical article addressing their ideal user's pain points."
sidebar_label: 'TakeShape conceptual guide'
---

![](/img/takeshape/takeshape.png)

## TakeShape conceptual guide

[TakeShape](https://takeshape.io) is a SaaS startup that offers users a way to work with GraphQL APIs more efficiently for serverless web development.

When I connected with the founders, they had recently pivoted to this new model from an earlier version of the product that was centered around content management specifically, in the form of a headless CMS.

Much of the marketing they had done for the product up to this point was now outdated and inaccurate.
And though they understood the API inside and out, the team of founding engineers was finding it surprisingly difficult to articulate its key selling points in a way that resonated with potential users.

I proposed creating a conceptual article that would speak directly to an ideal user's primary pain points to explain why they would want to use this product.

The end result is a piece entitled [_What Happens When Your Jamstack Blog Grows Up?_](https://www.takeshape.io/articles/what-happens-when-your-jamstack-blog-grows-up/)

In addition to researching and writing this piece, I also created a series of figures to visually depict the problems that TakeShape's product solves.

Read the full text below:

## What Happens When Your Jamstack Blog Grows Up?

### Exploring the Integration Layer with API Mesh

One of the best things about the Jamstack from the developer’s perspective is that you don’t need to spin up a backend from scratch – you can effectively piece together your own decentralized backend through a combination of third-party APIs and serverless functions, which perform all of the duties of a more traditional server.

Consider a typical “gateway drug” to this paradigm: you keep hearing about these cool new front-end frameworks and static site generators (SSGs) like Gatsby, Next.js and Eleventy, and you decide to use one for your next project.

The plan is to build a simple personal blog. This leads you down the rabbit hole of headless content management systems (CMS) to plug into your front end, followed by the related rabbit hole of how to actually host your files. Traditional servers won’t cut it when you need a build environment to assemble all of your code, so you opt for a host like Netlify or Vercel to handle the heavy lifting.

Congratulations! You are now officially jamming with the Jamstack: using JavaScript to pass API data to (pre-rendered) Markup, all of which happens in the cloud. No servers necessary! (For you, anyway.)

![](/img/takeshape/fig-1.png)

You publish a few blog posts, then a few more. Before you know it, an audience forms around your content. Time to add commenting functionality to your blog!

Recalling your experiences with the headless CMS, you figure there must be an existing API out there that you can plug ‘n’ play without having to reinvent the wheel. Sure enough! It takes some trial and error to implement, but eventually you cultivate a healthy comments section on your posts.

To your surprise, the blog becomes popular enough that you’re able to seriously consider monetizing the work that you’re putting into it. Your audience is saying they would love to purchase ebooks, online courses, access to a subscription site, and more. And wouldn’t you know it, there’s a specialized API out there to meet every single one of your development needs – and then some.

Your humble little Jamstack blog is growing up! And now you’ve got a more complex set of problems to solve: namely, how do you “mesh” all of these APIs together while keeping your code maintainable?

![](/img/takeshape/fig-2.png)

You may not have fully realized what you were signing up for when you got started, but this Jamstack approach represents a fairly new paradigm in web architecture. The monolithic “black box” architecture of the last generation – where all of an app’s functionality lives inside of a single code base – has been replaced by a constellation of autonomous, decoupled services.

Unlike, say, a WordPress blog, your Jamstack site doesn’t have a singular location where it “lives” – your front end, content, database, and functionality are all served up independently of one another. We describe this as separating the “presentation layer” from the “logic/data layer(s).”

This paradigm may not require a server per se, but as more and more APIs are introduced to the system, things are going to get exponentially more complicated in your frontend code:

What kind of protocol is each API using? How many calls are necessary for the data you need?

What’s the relevant language, syntax and schema shape for pulling in data?

How about all of the secret keys and permissions you need to keep safe?

Does the data you’re receiving need to be transformed before it can be used?

Do you know where to find the documentation you need to work with each API? Does the documentation even exist?

For simpler functionality, each of your decoupled services may get along fine just sending their data directly to your front end. But what happens when these services need to be able to communicate with one another? What if you need to bring together data from multiple services for a single function, such as searching?

To help address these problems, you could create an “integration layer” to consolidate all of your various APIs and serverless function calls into a single unit. How, you ask?

Why, by building your own API, of course!

One API to rule them all, if you will.

“But, but...” you may be protesting, “the whole point of building this way was so I didn’t need to worry about backend stuff! Now I have to assemble my own custom API from scratch that integrates all of these services I’m having such a hard time managing on the frontend?”

What you really need, it turns out, is a Backend For Frontend in the form of an API Mesh.

Backend For Frontend (BFF) is a term coined by Phil Calçado and his team at SoundCloud to describe the architectural patterns they devised while migrating their application away from a monolithic Ruby on Rails backend, towards a system of decoupled microservices.

The BFF model arose at the dawn of the smartphone revolution, when mobile was just beginning to claim a significant chunk of web traffic. It was created to address the problem of how to handle data flowing from backend APIs to both mobile and desktop devices, which can have drastically different user interfaces and experiences.

The solution was to construct unique APIs to serve each interface, which could then be tightly coupled with their corresponding front ends. They would be built in such a way as to make them maintainable by the same frontend teams who handled the user experience, making them more agile than traditional backend APIs that would require collaboration across teams to update.

Though this case study may not seem directly relevant to our Jamstack blog at first glance, what is our “integration layer,” after all, if not a kind of Backend For Frontend?

TakeShape’s API Mesh was created to address this missing “integration” piece of the Jamstack puzzle. API Mesh empowers developers to take their highly distributed sites and apps to the next level by abstracting away many of the aforementioned pain points.

![](/img/takeshape/fig-3.png)

In essence, you get to keep your constellation of third-party APIs, but all you have to worry about on the frontend is the single GraphQL endpoint provided to you by the API Mesh. Now you have one singular source of truth for all of the data flowing through your frontend. Perhaps best of all, since it uses GraphQL, your API Mesh is self-documenting, which means you never have to go searching for documentation again to find out how to access the data you need.

And TakeShape is more than just its API Mesh -- it’s an all-in-one Jamstack platform, from SSG, to CMS, to BFF and beyond. Parsing that into a human-readable format: TakeShape gives you every tool described in this piece, enabling you to see your next Jamstack project through from concept to completion, all under one roof.

It’s free to get started, and the generous free tier comes fully loaded. Give TakeShape’s API Mesh a try today!
