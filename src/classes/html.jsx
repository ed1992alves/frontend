import React, { useState } from "react";
import "../styles/html.less";
import * as Text from "../Utils/Text";
import paidTraffic from "../styles/images/star_wars_traffic.png";
import facebookAdds from "../styles/images/facebook_adds.png";
import minderaTags from "../styles/images/mindera_tags.png";
import minderaHeaders from "../styles/images/mindera_headers.png";
import minderaImages from "../styles/images/mindera_images.png";
import zip from "../styles/images/zip.svg";

const HTML = () => {
  return (
    <>
      <h2>HTML 4</h2>
      <h3>Tags</h3>
      <div className="info infoWithExample">
        <div>
          <ul>
            <li>
              <b>{"<a>"}</b>: Specifies an anchor
            </li>
            <li>
              <b>{"<b>"}</b>: Specifies bold text
            </li>
            <li>
              <b>{"<body>"}</b>: Specifies the body element
            </li>
            <li>
              <b>{"<br>"}</b>: Inserts a single line break
            </li>
            <li>
              <b>{"<button>"}</b>: Specifies a push button
            </li>
            <li>
              <b>{"<div>"}</b>: Specifies a section in a document
            </li>
            <li>
              <b>{"<form>"}</b>: Specifies a form
            </li>
            <li>
              <b>{"<frame>"}</b>: Specifies a sub window (a frame)
            </li>

            <li>
              <b>{"<h1-h6>"}</b>: Specifies header 1 to header 6
            </li>
            <li>
              <b>{"<head>"}</b>: Specifies information about the document
            </li>
            <li>
              <b>{"<html>"}</b>: Specifies an html document
            </li>
            <li>
              <b>{"<i>"}</b>: Specifies italic text
            </li>
            <li>
              <b>{"<img>"}</b>: Specifies an image
            </li>
            <li>
              <b>{"<input>"}</b>: Specifies an input field
            </li>
            <li>
              <b>{"<li>"}</b>: Specifies a list item
            </li>
            <li>
              <b>{"<meta>"}</b>: Specifies meta information
            </li>
            <li>
              <b>{"<ol>"}</b>: Specifies an ordered list
            </li>
            <li>
              <b>{"<option>"}</b>: Specifies an option in a drop-down list
            </li>
            <li>
              <b>{"<p>"}</b>: Specifies a paragraph
            </li>
            <li>
              <b>{"<script>"}</b>: Specifies a script
            </li>
            <li>
              <b>{"<select>"}</b>: Specifies a selectable list
            </li>
            <li>
              <b>{"<span>"}</b>: Specifies a section in a document
            </li>
            <li>
              <b>{"<table>"}</b>: Specifies a table
            </li>
            <li>
              <b>{"<tbody>"}</b>: Specifies a table body
            </li>
            <li>
              <b>{"<td>"}</b>: Specifies a table cell
            </li>
            <li>
              <b>{"<th>"}</b>: Specifies a table header
            </li>
            <li>
              <b>{"<tr>"}</b>: Specifies a table row
            </li>
            <li>
              <b>{"<textara>"}</b>: Specifies a text area
            </li>
            <li>
              <b>{"<ul>"}</b>: Specifies an unordered list
            </li>
          </ul>
        </div>
      </div>

      <h3>Tables</h3>
      <div className="info infoWithExample">
        <div>
          <Text.Black nr_idents={0}>{"<table>"}</Text.Black> <br></br>
          <Text.Black nr_idents={1}> {"<thead>"}</Text.Black> <br></br>
          <Text.Black nr_idents={2}> {"<tr>"}</Text.Black> <br></br>
          <Text.Black nr_idents={3}>
            {" "}
            {"<th>"}Artist{"</th>"}
          </Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={3}>
            {"<th>"}Single{"</th>"}
          </Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={3}>
            {" "}
            {"<th>"}Year{"</th>"}
          </Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={2}> {"</tr>"}</Text.Black> <br></br>
          <Text.Black nr_idents={1}> {"</thead>"}</Text.Black> <br></br>
          <Text.Black nr_idents={1}> {"<tbody>"}</Text.Black> <br></br>
          <Text.Black nr_idents={2}> {"<tr>"}</Text.Black> <br></br>
          <Text.Black nr_idents={3}>
            {"<td>"}Maria Bethania{"</td>"}
          </Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={3}>
            {"<td>"}Carta da Amor{"</td>"}
          </Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={3}>
            {" "}
            {"<td>"}2017{"</td>"}
          </Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={2}> {"</tr>"}</Text.Black> <br></br>
          <Text.Black nr_idents={2}> {"<tr>"}</Text.Black> <br></br>
          <Text.Black nr_idents={3}>
            {"<td>"}Elvis Presley {"</td>"}
          </Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={3}>
            {"<td>"}Can't Help Falling in Love{"</td>"}
          </Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={3}>
            {"<td>"}1961{"</td>"}
          </Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={2}> {"</tr>"}</Text.Black> <br></br>
          <Text.Black nr_idents={1}> {"</tbody>"}</Text.Black> <br></br>
          <Text.Black nr_idents={0}>{"</table>"}</Text.Black> <br></br>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Artist</th>
                <th>Single</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maria Bethania</td>
                <td>Cartas de Amor</td>
                <td>2017</td>
              </tr>
              <tr>
                <td>Elvis Presley</td>
                <td>Can't Help Falling in Love</td>
                <td>1961</td>
              </tr>
              <tr>
                <td>Björk</td>
                <td>It's oh so quiet</td>
                <td>2007</td>
              </tr>
              <tr>
                <td>The Coors</td>
                <td>Breathless</td>
                <td>2009</td>
              </tr>
              <tr>
                <td>Chicago</td>
                <td>25 or 6 to 4</td>
                <td>1970</td>
              </tr>
              <tr>
                <td>Earth, Wind & Fire</td>
                <td>September</td>
                <td>1978</td>
              </tr>
              <tr>
                <td>Xana Toc Toc</td>
                <td>Pulguinha Teimosa</td>
                <td>2019</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3>Div VS Span</h3>
      <div className="info infoWithExample">
        <div>
          <ul>
            <li>div is a block element</li>
            <li>span is an inline element</li>
          </ul>
        </div>
        <div className="center">
          This means that to use them semantically, divs should be used to wrap
          sections of a document, while spans should be used to wrap small
          portions of text, images, etc.
        </div>
      </div>
      <div></div>
      <h2>Semantic HTML5 Elements</h2>
      <div>
        Semantic HTML elements are those that clearly describe their meaning in
        a human- and machine-readable way.
        <p></p>
        <b>What are Semantic Elements?</b>
        <p></p>HTML was originally created as a markup language to describe
        documents on the early internet. As the internet grew and was adopted by
        more people, its needs changed.
        <p></p>
        Where the internet was originally intended for sharing scientific
        documents, now people wanted to share other things as well. Very
        quickly, people started wanting to make the web look nicer.
        <p></p>
        {
          "As the use of visually designed layouts progressed, programmers started to use a generic “non-semantic” tag like <div>. They would often give these elements a class or id attribute to describe their purpose."
        }{" "}
        <p></p>{" "}
        {
          'For example, instead of <header> this was often written as <div class="header">'
        }
        .
        <p>
          As HTML5 is still relatively new, this use of non-semantic elements is
          still very common on websites today.
        </p>
      </div>
      <h3>List of new semantic elements</h3>
      <ul>
        <li>article</li>
        <li>aside</li>
        <li>details</li>
        <li>figcaption</li>
        <li>figure </li>
        <li>footer </li>
        <li> header </li>
        <li> main </li>
        <li> mark </li>
        <li> nav </li>
        <li> section </li>
        <li> summary </li>
        <li> time </li>
      </ul>
      <div>
        {
          "Elements such as <header>, <nav>, <section>, <article>, <aside>, and <footer> act more or less like <div> elements. They group other elements together into page sections. However where a <div> tag could contain any type of information, it is easy to identify what sort of information would go in a semantic <header> region."
        }
      </div>
      <h3>Why use semantic elements?</h3>
      <div className="info infoWithExample">
        <div className="info">
          <Text.Black nr_idents={0}>{"<header></header>"}</Text.Black> <br></br>
          <Text.Black nr_idents={1}>{"<section>"}</Text.Black> <br></br>
          <Text.Black nr_idents={2}>{"<article>"}</Text.Black> <br></br>
          <Text.Black nr_idents={3}>{"<figure>"}</Text.Black> <br></br>
          <Text.Black nr_idents={4}>{"<img>"}</Text.Black> <br></br>
          <Text.Black nr_idents={4}>
            {"<figcaption></figcaption>"}
          </Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={3}>{"</figure>"}</Text.Black> <br></br>
          <Text.Black nr_idents={2}>{"</article>"}</Text.Black> <br></br>
          <Text.Black nr_idents={1}>{"</section>"}</Text.Black> <br></br>
          <Text.Black nr_idents={0}>{"<footer></footer>"}</Text.Black>
        </div>
        <div className="info">
          <Text.Black nr_idents={0}>{"<div id='header' ></div>"}</Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={1}>{"<div class='section' >"}</Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={2}>{"<div class='article' >"}</Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={3}>{"<div class='figure' >"}</Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={4}>{"<img>"}</Text.Black> <br></br>
          <Text.Black nr_idents={4}>
            {"<div class='figcaption'></div>"}
          </Text.Black>{" "}
          <br></br>
          <Text.Black nr_idents={3}>{"</div>"}</Text.Black> <br></br>
          <Text.Black nr_idents={2}>{"</div>"}</Text.Black> <br></br>
          <Text.Black nr_idents={1}>{"</div>"}</Text.Black> <br></br>
          <Text.Black nr_idents={0}>{"<div id='footer'></div>"}</Text.Black>
        </div>
      </div>
      <div>
        First, it is much easier to read. This is probably the first thing you
        will notice when looking at the first block of code using semantic
        elements.<p></p>It has <b>greater accessibility</b>. You are not the
        only one that finds semantic elements easier to understand. Search
        engines and assistive technologies (like screen readers for users with a
        sight impairment) are also able to better understand the context and
        content of your website, meaning a better experience for your users.
        <p></p>
        {
          'Overall, semantic elements also lead to more consistent code. When creating a header using non-semantic elements, different programmers might write this as <div class="header">, <div id="header">, <div class="head">, or simply <div>. There are so many ways that you can create a header element, and they all depend on the personal preference of the programmer. By creating a standard semantic element, it makes it easier for everyone.'
        }
        <p></p>
        Since October 2014, HTML4 got upgraded to HTML5, along with some new
        “semantic” elements.
        <p></p>
        <br></br>
        <b>{"<section> and <article>"}</b>
        <p></p>
        {
          "HTML4 offered only one type of container element, which is <div>. While this is still used in HTML5, HTML5 provided us with <section> and <article> in a way to replace"
        }
        <ol>
          <li>
            An article is intended to be independently distributable or
            reusable.
          </li>
          <li>A section is a thematic grouping of content.</li>
        </ol>
      </div>

      <div className="examples">
        <Text.Purple>{"<section>"}</Text.Purple> <br></br>
        <Text.Yellow nr_idents={1}>{"<p>Top Stories</p>"}</Text.Yellow>{" "}
        <br></br>
        <Text.Purple nr_idents={1}>{"<section>"}</Text.Purple> <br></br>
        <Text.Yellow nr_idents={2}>{"<p>News</p>"}</Text.Yellow> <br></br>
        <Text.Orange nr_idents={2}>
          {"<article>Story 1</article>"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Orange nr_idents={2}>
          {"<article>Story 2</article>"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Orange nr_idents={2}>
          {"<article>Story 3</article>"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Purple nr_idents={1}>{"</section>"}</Text.Purple> <br></br>
        <Text.Purple nr_idents={1}>{"<section>"}</Text.Purple> <br></br>
        <Text.Orange nr_idents={2}>
          {"<article>Story 1</article>"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Orange nr_idents={2}>
          {"<article>Story 2</article>"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Orange nr_idents={2}>
          {"<article>Story 3</article>"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Purple nr_idents={1}>{"</section>"}</Text.Purple> <br></br>
        <Text.Purple>{"</section>"}</Text.Purple> <br></br>
      </div>

      <div>
        <b>{"<header> and <hgroup>"}</b>
        <p></p>
        {
          "The <header> element is generally found at the top of a document, a section, or an article and usually contains the main heading and some navigation and search tools."
        }
        <p></p>
        {
          "The <hgroup> element should be used where you want a main heading with one or more subheadings."
        }
      </div>

      <div className="infoWithExample info">
        <div className="greenBackground">
          <div>
            <Text.Green>{"<header>"}</Text.Green>
            <Text.Blue nr_idents={1}>{"<h1>Company A</h1>"}</Text.Blue>
            <Text.Red nr_idents={1}>{"<ul>"}</Text.Red>
            <Text.Orange nr_idents={2}>
              {"<li><a href='/home'>Home</a></li>"}
            </Text.Orange>
            <Text.Orange nr_idents={2}>
              {"<li><a href='/about'>About</a></li>"}
            </Text.Orange>
            <Text.Orange nr_idents={2}>
              {"<li><a href='/contact'>Contact us</a></li>"}
            </Text.Orange>
            <Text.Red nr_idents={1}>{"</ul>"}</Text.Red>
            <Text.Green>{"</header>"}</Text.Green>
          </div>
        </div>
        <div className="greenBackground">
          <div>
            <Text.Green>{"<hgroup>"}</Text.Green>
            <Text.Orange nr_idents={1}>{"<h1>Heading 1</h1>"}</Text.Orange>
            <Text.Orange nr_idents={1}>{"<h2>Heading 2</h2>"}</Text.Orange>
            <Text.Orange nr_idents={1}>{"<h3>Heading 3</h3>"}</Text.Orange>
            <Text.Green>{"</hgroup>"}</Text.Green>
          </div>
        </div>
      </div>
      <p></p>
      <div>
        {
          "REMEMBER, that the <header> element can contain any content, but the <hgroup> element can only contain other headers, that is <h1> to <h6> and including <hgroup>."
        }
      </div>
      <div>
        <b>{"<aside>"}</b>
        <p>
          {
            "The <aside> element is intended for content that is not part of the flow of the text in which it appears, however still related in some way. This of <aside> as a sidebar to your main content."
          }
        </p>
      </div>
      <div>
        <b>{"<nav>"}</b>
        <p></p>
        {
          "Before HTML5, our menus were created with <ul>’s and <li>’s. Now, together with these, we can separate our menu items with a <nav>, for navigation between your pages. "
        }
      </div>
      <div className="examples">
        <Text.Purple>{"<nav>"}</Text.Purple> <br></br>
        <Text.Red nr_idents={1}>{"<ul>"}</Text.Red> <br></br>
        <Text.Orange nr_idents={2}>
          {"<li><a href='/home'>Home</a></li>"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Orange nr_idents={2}>
          {"<li><a href='/about'>About</a></li>"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Orange nr_idents={2}>
          {"<li><a href='/contact'>Contact us</a></li>"}
        </Text.Orange>{" "}
        <br></br>
        <Text.Red nr_idents={1}>{"</ul>"}</Text.Red> <br></br>
        <Text.Purple>{"</nav>"}</Text.Purple> <br></br>
      </div>
      <div>
        <b>{"<footer>"}</b>
        <p></p>
        {
          "If there is a <header> there must be a <footer>. A <footer> is generally found at the bottom of a document, a section, or an article. Just like the <header> the content is generally metainformation, such as author details, legal information, and/or links to related information."
        }
      </div>
      <div>
        <b>{"<figure> and <figcaption>"}</b>
        <p></p>
        {
          "<figure> is for wrapping your image content around it, and <figcaption> is to caption your image."
        }
      </div>

      <div className="examples">
        <Text.Blue>{"<figure>"}</Text.Blue> <br></br>
        <Text.Orange nr_idents={1}>
          {
            '<img src="https://en.wikipedia.org/wiki/File:Shadow_of_Mordor_cover_art.jpg" alt="Shadow of Mordor" />'
          }
        </Text.Orange>{" "}
        <br></br>
        <Text.Purple nr_idents={1}>
          {
            "<figcaption>Cover art for Middle-earth: Shadow of Mordor</figcaption>"
          }
        </Text.Purple>{" "}
        <br></br>
        <Text.Blue>{"</figure>"}</Text.Blue>
      </div>
      <a href="./exercicio.zip" download>
        <span className="zip">
          <h3>Exercise</h3>

          <img src={zip} alt="exercicio"></img>
        </span>
      </a>
      <h2>Website Traffic</h2>
      <div>
        Website traffic is a number of people who come to your site through
        various channels
      </div>
      <div className="info">
        <ol>
          <li>
            <Text.Green>
              <b>Direct Traffic:</b>
            </Text.Green>
            <p></p>Direct traffic refers to the traffic that comes to the
            website directly by typing the website name. People come to the
            website without the help of the referring source or channels.
            Generally, direct traffic comes only after being a famous brand or
            familiar in the market. Driving direct traffic has become everyone’s
            dream.
            <p></p>
            <ul>
              <li>It takes lots of effort and time to get direct traffic</li>
              <li>It is free</li>
              <li>
                Direct traffic signifies loyalty, trust towards the brand and
                people already aware of your brand
              </li>
            </ul>
          </li>
          <li>
            <Text.Purple>
              <b>Organic Traffic:</b>
            </Text.Purple>
            <p></p>Organic traffic comes from different search engines like
            Google, Yahoo, Bing, and Yandex. Organic traffic is the best source
            of traffic without paying any cost. However, driving organic traffic
            need lots of <b>Search Engine Optimization (SEO)</b> works to rank
            for specified keywords. SEO is the collection of strategies to
            maintain the health of the website so as to rank in the Search
            Engine Results Pages (SERPs) by satisfying the algorithms defined by
            the search engines.
            <ul>
              <li>It is free </li>
              <li>
                Organic traffic depends on the level of Search Engine
                Optimization (SEO)
              </li>
              <li>Getting result takes time but will be long-lasting</li>
              <li>
                Organic traffic ultimately means a website is in good condition.
                Because without optimizing the website in a good manner, google
                does not rank any post on top.
              </li>
            </ul>
          </li>
          <li>
            <Text.Blue>
              <b>Paid Traffic:</b>
            </Text.Blue>{" "}
            <p></p>
            Paid traffic is the traffic you get from different channels like
            search engines or social media platforms by paying a certain amount
            of money. One of the best examples of the Paid ads platform is
            Google AdWords where companies or individuals pay to Google for
            displaying their business website on the Google Search Engine Result
            Pages (SERPs).
            <p></p>
            <div className="imageWrapper">
              <img className="paid" src={paidTraffic}></img>
            </div>
            <p></p>
            The following image shows an example of how Facebook Ads look like.
            <p></p>
            <div className="imageWrapper">
              <img className="facebookAdds" src={facebookAdds}></img>
            </div>
            <ul>
              <li>You need to pay for this traffic </li>
              <li>You can have control over which audience to reach</li>
            </ul>
          </li>
          <li>
            <Text.Red>
              {" "}
              <b>Referral Traffic:</b>{" "}
            </Text.Red>{" "}
            <p></p>
            Referral traffic is traffic that comes from various websites and
            other channels. More the referral to the site, the more the trust,
            and authority of the website. Referral traffic comes when other
            known or unknown people link the website in their blog post which
            means you have created some kind of value to them. That’s is why
            they are recommending for other people as well.
            <ul>
              <li>It is free </li>
              <li>
                Referral traffic signifies other people trust towards the brand
              </li>
            </ul>
          </li>
          <li>
            <Text.Orange>
              {" "}
              <b>Social Media Traffic: </b>
            </Text.Orange>
            <p></p>
            As the name suggests, social media traffic is traffic that comes
            from Social media channels like Facebook, Twitter, Pinterest,
            LinkedIn, Youtube, Instagram, and other social media links. The good
            thing about social media traffic is, it is 100% free unless you
            decide to pay for promoting products or services. But if you pay to
            social media then the traffic falls on the paid ads traffic.
            <p></p>Google algorithm doesn’t consider social signals as part of
            its search ranking algorithm. Therefore, any links you’ve built on
            your Facebook profile, page or group or Twitter will not have any
            significant impact on your off-page SEO efforts except the traffic.
            <ul>
              <li>It is free </li>
              <li>
                The amount of traffic depends on the number of followers,
                engagement level, value you create for followers.
              </li>
              <li>
                Traffic comes from social media channels considered as no-follow
                links. Google doesn’t consider social signals as part of its
                search ranking algorithm.
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <h2>SEO</h2>
      <div>
        Search engine optimization is the process of improving the quality and
        quantity of website traffic to a website or a web page from search
        engines
      </div>
      <div className="info">
        <ol>
          <li>
            <Text.Green>
              <b>Title tag</b>{" "}
            </Text.Green>
            <p></p>This is arguably the most important tag that you need to be
            familiar with when it comes to increasing your rankings.
            <p></p>
            For any search engine to rank your website, it needs to know what
            your content is about, what each page is about, and what your site
            as a whole is about.
            <p></p>
            The title tag describes the topic of each page or piece of content
            on your website. And it does it in a way that search engines can
            understand.
            <p></p>
          </li>
          <li>
            <Text.Purple>
              <b>Meta description tag</b>
            </Text.Purple>
            <p></p>Think of the meta description as the synopsis on the back of
            a book. The title is the heading, and the meta description is the
            extra couple sentences of information that further describe what the
            content is about.
            <p></p>
            <div className="imageWrapper">
              <img className="minderaTags" src={minderaTags}></img>
            </div>
          </li>
          <li>
            <Text.Red>
              <b>Header tags</b>
            </Text.Red>
            <p></p>
            There are several different header tags. Depending on your format,
            you might have h1, h2, h3, and sometimes h4 or even h5.
            <p></p>
            These will get progressively smaller and make for great headings and
            subheadings to organize your content.
            <p></p>
            But the header tags don’t just help organize your content for
            readers. It also helps your SEO.
            <p></p>When you tag all of your topical headings throughout the
            post, you tell search engines exactly what your content is
            discussing.
            <p></p>
            This is how Google creates the snippets you’ll sometimes see when
            looking for a topic.
            <p></p>
            <div className="imageWrapper">
              <img className="minderaTags" src={minderaHeaders}></img>
            </div>
          </li>
          <li>
            <Text.Blue>
              <b>Image alt tags</b>
            </Text.Blue>
            <p></p> People don’t only search in Google under the “All” tab.
            Occasionally, people will also search under the “Images” tab.{" "}
            <p></p>
            And when they do that, the SEO game is a little bit different.{" "}
            <p></p>
            Search engines can’t read images, but search engines can read words.{" "}
            <p></p>
            This means that, to have a chance for your images to rank on Google,
            you need to include alt tags on all of your screenshots and photos.{" "}
            <p></p>
            That way, when someone is searching the “Images” tab, they can still
            find your content.
            <p></p>
            <div className="imageWrapper">
              <img className="minderaTags" src={minderaImages}></img>
            </div>
          </li>
          <li>
            <Text.Orange>
              <b>Nofollow link tags</b>
            </Text.Orange>
            <p></p>Nofollow tags tell search engines not to lend credence to the
            backlink that you’re creating for the website.
            <p></p>
            In other words, linking to a website or piece of content would
            normally increase that website’s domain authority. But with a
            nofollow tag, it won’t.
            <p></p>
            But don’t worry: The link will still work. It will still take
            whoever clicks on it to the appropriate place. It just won’t help
            the website’s SEO and will ensure that the link doesn’t hurt your
            domain authority.
            <p></p>
          </li>
          <li>
            <Text.Yellow>
              <b>Links and anchor text tags</b>
            </Text.Yellow>
            <p></p>If you’re linking to someone else’s website and you provide a
            good anchor tag, it will help their rankings more than the link
            alone.
            <p></p>
            And if you’re linking to a page on your own website, it will help
            your own domain authority because it keeps your content organized.
            <p></p>
            Search engines love organized content.
            <p></p>
          </li>
          <li>
            <Text.Pink>
              <b>Canonical tags</b>
            </Text.Pink>
            <p></p> The canonical tag is great for organizing your content and
            prioritizing one web page over a duplicate web page.
            <ul>
              <li>http://www.example.com</li>
              <li>https://www.example.com</li>
              <li>http://example.com</li>
              <li>http://www.example.com/index.php</li>
              <li>http://www.example.com/index.php?refer=twitter</li>
            </ul>
            <p></p>
            All of those seem like the exact same web page. But to a search
            engine, each one is a duplicate.
            <p></p>
            That’s only a small sample of how many duplicates most web pages
            have. Your website could have hundreds or thousands of duplicate
            pages.
            <p></p> This becomes a problem when search engines are trying to
            rank your content. It confuses the search engine, and it ranks each
            one of these URLs separately.
            <p></p> To solve this problem, you can use the canonical tag to
            specify which URL Google should pay attention to above all others.
            <div className="info">
              {"<link rel='canonical' href='http://www.example.com'/>"}
            </div>
          </li>
        </ol>
      </div>
    </>
  );
};

export default HTML;
