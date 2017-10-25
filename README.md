This is a goddamned Javascript function to insert static security headers into a Cloudfront response. You can read the full rant on the [Last Week in AWS Blog](https://lastweekinaws.com/blog/a-static-headache.htmlhttps://lastweekinaws.com/blog/a-static-headache.html).

Note that this must be deployed to us-east-1 because of course it does; otherwise you can't use Cloudfront as an event source.

You also must set the trigger as "Viewer Response" or it won't do what you think it will. 

You have my sympathies.
