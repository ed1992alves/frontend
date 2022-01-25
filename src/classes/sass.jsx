import React, { useState } from "react";
import "../styles/html.less";
import * as Text from "../Utils/Text";

const HTML = () => {
  return (
    <>
      <h2>CSS Preprocessors</h2>
      <div>
        CSS Preprocessors are increasingly becoming a mainstay in the workflow
        of front end web developers. CSS is an incredibly complicated and
        nuanced language, and in an effort to make it’s usage easier, developers
        often turn to using preprocessors such as SASS or LESS.
        <p></p>
        CSS Preprocessors compile the code which is written using a special
        compiler. They then use that to create a CSS file, which can then be
        referenced by the main HTML document.
        <p></p>
        When using any CSS Preprocessor, you will be able to program in normal
        CSS just as you would if the preprocessor were not in place. The good
        thing is you also have more options available to you. Some, such as
        SASS, has specific style standards which are meant make the writing of
        the document even easier, such as the freedom to omit braces if you
        want.
        <p> </p>
        Of course, CSS Preprocessors also offer other features as well. Many of
        the features offered are incredibly similar across preprocessors, with
        only slight variances in syntax. Thus, you can choose pretty much any
        one you wish, and you will be able to achieve the same things.
      </div>
      <h2>Sass</h2>
      <div>
        CSS on its own can be fun, but stylesheets are getting larger, more
        complex, and harder to maintain. This is where a preprocessor can help.
        Sass has features that don't exist in CSS yet like nesting, mixins,
        inheritance, and other nifty goodies that help you write robust,
        maintainable CSS.
        <p></p>
        Once you start tinkering with Sass, it will take your preprocessed Sass
        file and save it as a normal CSS file that you can use in your website.
        <p></p>
        The most direct way to make this happen is in your terminal. Once Sass
        is installed, you can compile your Sass to CSS using the <b>
          sass
        </b>{" "}
        command. You'll need to tell Sass which file to build from, and where to
        output CSS to.
      </div>
      <div className="info">sass input.scss output.css</div>
      <div>
        {" "}
        You can also watch individual files or directories with the --watch
        flag. The watch flag tells Sass to watch your source files for changes,
        and re-compile CSS each time you save your Sass{" "}
      </div>
      <div className="info">sass --watch input.scss output.css</div>
      <div>
        You can watch and output to directories by using folder paths as your
        input and output, and separating them with a colon.{" "}
      </div>
      <div className="info">sass --watch app/sass:public/stylesheets</div>
      <div>But don't forget to install first sass</div>
      <div className="info">npm install -g sass</div>
      <h3>Variables</h3>
      <div>
        Think of variables as a way to store information that you want to reuse
        throughout your stylesheet.
      </div>
      <div className="examples">
        <Text.WarmBlue>$font-stack</Text.WarmBlue>: Helvetica, sans-serif;{" "}
        <br></br>
        <Text.WarmBlue>$primary-color</Text.WarmBlue>: #333; <p></p>
        <Text.Green>body</Text.Green> {"{"} <br></br>
        <Text.Orange className="nr_idents1">font</Text.Orange>: 100%{" "}
        <Text.WarmBlue>$font-stack</Text.WarmBlue>; <br></br>
        <Text.Orange className="nr_idents1">color</Text.Orange>:{" "}
        <Text.WarmBlue>$primary-color</Text.WarmBlue>; <br></br>
        {"}"}
      </div>
      <h3>Nesting</h3>
      <div>
        Sass will let you nest your CSS selectors in a way that follows the same
        visual hierarchy of your HTML
      </div>
      <div className="info infoWithExample">
        <div>
          <Text.Grey>scss</Text.Grey> <p></p>
          <Text.Green>nav</Text.Green> {"{"} <br></br>
          <Text.Green className="nr_idents1">ul</Text.Green> {"{"} <br></br>
          <Text.Orange className="nr_idents2">margin</Text.Orange>: 0; <br></br>{" "}
          <Text.Orange className="nr_idents2">padding</Text.Orange>: 0;{" "}
          <br></br> <Text.Orange className="nr_idents2">list-style</Text.Orange>
          : none; <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          {"}"} <p></p>
          <Text.Green className="nr_idents1">li</Text.Green> {"{"} <br></br>{" "}
          <Text.Orange className="nr_idents2">display</Text.Orange>:
          inline-block; <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          {"}"} <p></p> <Text.Green className="nr_idents1">a</Text.Green> {"{"}{" "}
          <br></br>
          <Text.Orange className="nr_idents2">display</Text.Orange>: block;{" "}
          <br></br> <Text.Orange className="nr_idents2">padding</Text.Orange>:
          6px 12px; <br></br>{" "}
          <Text.Orange className="nr_idents2">text-decoration</Text.Orange>:
          none; <br></br>
          <Text.Black className="nr_idents1"></Text.Black> <p></p>
          <Text.Green className="nr_idents3">&.blue </Text.Green>
          {"{"}
          <br></br>
          <Text.Orange className="nr_idents4">color</Text.Orange>: blue<br></br>
          <Text.Black className="nr_idents3"></Text.Black>
          {"}"} <br></br>
          <Text.Black className="nr_idents2"></Text.Black>
          {"}"} <br></br>
          {"}"}
        </div>
        <div>
          <Text.Grey>css</Text.Grey> <p></p>
          <Text.Green> nav ul</Text.Green> {"{"} <br></br>
          <Text.Orange className="nr_idents1">margin</Text.Orange>: 0; <br></br>
          <Text.Orange className="nr_idents1">padding</Text.Orange>: 0;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">list-style</Text.Orange>: none;
          {"}"} <p></p>
          <Text.Green> nav li</Text.Green> {"{"}
          <br></br>
          <Text.Orange className="nr_idents1">display</Text.Orange>:
          inline-block;<br></br>
          {"}"} <p></p>
          <Text.Green> nav a</Text.Green> {"{"}
          <br></br>
          <Text.Orange className="nr_idents1">display</Text.Orange>: block;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">padding</Text.Orange>: 6px 12px;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">text-decoration</Text.Orange>:
          none;<br></br>
          {"}"}
          <p></p>
          <Text.Green> nav a.blue</Text.Green> {"{"}
          <br></br>
          <Text.Orange className="nr_idents1">color</Text.Orange>: blue;{" "}
          <br></br>
          {"}"}
        </div>
      </div>
      <h3>Partials</h3>
      <div>
        You can create partial Sass files that contain little snippets of CSS
        that you can include in other Sass files. This is a great way to
        modularize your CSS and help keep things easier to maintain. A partial
        is a Sass file named with a leading underscore. You might name it
        something like <b>_partial.scss</b>. The underscore lets Sass know that
        the file is only a partial file and that it should not be generated into
        a CSS file. Sass partials are used with the @use rule.
      </div>

      <h3>Modules</h3>
      <div>
        You don't have to write all your Sass in a single file. You can split it
        up however you want with the @use rule. This rule loads another Sass
        file as a module, which means you can refer to its variables, mixins,
        and functions in your Sass file with a namespace based on the filename.
      </div>
      <div className="examples">
        <Text.Grey>//_base.scss</Text.Grey> <p></p>
        <Text.WarmBlue>$font-stack</Text.WarmBlue>: Helvetica, sans-serif;{" "}
        <br></br>
        <Text.WarmBlue>$primary-color</Text.WarmBlue>: #333; <p></p>
        <Text.Green>body</Text.Green> {"{"} <br></br>
        <Text.Orange className="nr_idents1">font</Text.Orange>: 100%{" "}
        <Text.WarmBlue>$font-stack</Text.WarmBlue>; <br></br>
        <Text.Orange className="nr_idents1">color</Text.Orange>:{" "}
        <Text.WarmBlue>$primary-color</Text.WarmBlue>; <br></br>
        {"}"}
      </div>
      <div className="examples">
        <Text.Grey>//styles.scss</Text.Grey> <p></p>
        <b>@use</b> <Text.Pink>'base'</Text.Pink>; <p></p>
        <Text.Green>.inverse</Text.Green> {"{"} <br></br>
        <Text.Orange className="nr_idents1">background-color</Text.Orange>:
        base.$primary-color; <br></br>{" "}
        <Text.Orange className="nr_idents1">color</Text.Orange>: white;{" "}
        <br></br>
        {"}"}
      </div>
      <h3>Mixins</h3>
      <div>
        Some things in CSS are a bit tedious to write, especially with CSS3 and
        the many vendor prefixes that exist. A mixin lets you make groups of CSS
        declarations that you want to reuse throughout your site. It helps keep
        your Sass very DRY. You can even pass in values to make your mixin more
        flexible.{" "}
      </div>
      <div className="info infoWithExample">
        <div>
          <Text.Grey>scss</Text.Grey> <p></p>
          <b>@mixin</b> <Text.Pink>theme</Text.Pink>(
          <Text.WarmBlue>$theme</Text.WarmBlue>: DarkGray) {"{"}
          <br></br>
          <Text.Orange className="nr_idents1">background</Text.Orange>:{" "}
          <Text.WarmBlue>$theme</Text.WarmBlue>;<br></br>
          <Text.Orange className="nr_idents1">box-shadow</Text.Orange>: 0 0 1px
          rgba(<Text.WarmBlue>$theme</Text.WarmBlue>, .25); <br></br>
          <Text.Orange className="nr_idents1">color</Text.Orange>: #fff;{" "}
          <br></br>
          {"}"}
          <p></p>
          <Text.Green>.info</Text.Green> {"{"} <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          <b>@include</b> <Text.Pink>theme</Text.Pink>; <br></br>
          {"}"}
          <p></p>
          <Text.Green>.alert</Text.Green> {"{"} <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          <b>@include</b> <Text.Pink>theme</Text.Pink>(
          <Text.WarmBlue>$theme</Text.WarmBlue>: DarkRed); <br></br>
          {"}"}
          <p></p>
          <Text.Green>.success</Text.Green> {"{"} <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          <b>@include</b> <Text.Pink>theme</Text.Pink>(
          <Text.WarmBlue>$theme</Text.WarmBlue>: DarkGreen); <br></br>
          {"}"}
        </div>
        <div>
          <Text.Grey>css</Text.Grey>
          <p></p>
          <Text.Green>.info </Text.Green>
          {"{"} <br></br>
          <Text.Orange className="nr_idents1">background</Text.Orange>:
          DarkGray; <br></br>{" "}
          <Text.Orange className="nr_idents1">box-shadow</Text.Orange>: 0 0 1px
          rgba(169, 169, 169, 0.25); <br></br>
          <Text.Orange className="nr_idents1">color</Text.Orange>: #fff;{" "}
          <br></br>
          {"}"} <p></p>
          <Text.Green>.alert </Text.Green> {"{"} <br></br>
          <Text.Orange className="nr_idents1">background</Text.Orange>: DarkRed;{" "}
          <br></br> <Text.Orange className="nr_idents1">box-shadow</Text.Orange>
          : 0 0 1px rgba(139, 0, 0, 0.25); <br></br>{" "}
          <Text.Orange className="nr_idents1">color</Text.Orange>: #fff;{" "}
          <br></br>
          {"}"} <p></p>
          <Text.Green>.success </Text.Green> {"{"} <br></br>
          <Text.Orange className="nr_idents1">background</Text.Orange>:
          DarkGreen; <br></br>
          <Text.Orange className="nr_idents1">box-shadow</Text.Orange>: 0 0 1px
          rgba(0, 100, 0, 0.25); <br></br>
          <Text.Orange className="nr_idents1">color</Text.Orange>: #fff;{" "}
          <br></br>
          {"}"}
        </div>
      </div>
      <h3>Extened/Inheritance</h3>
      <div>
        Using @extend lets you share a set of CSS properties from one selector
        to another. In our example we're going to create a simple series of
        messaging for errors, warnings and successes using another feature which
        goes hand in hand with extend, placeholder classes. A placeholder class
        is a special type of class that only prints when it is extended, and can
        help keep your compiled CSS neat and clean.
      </div>
      <div className="info infoWithExample">
        <div>
          <Text.Grey>scss</Text.Grey> <p></p>
          <Text.Grey>
            /* This CSS will print because %message-shared is extended. */
          </Text.Grey>{" "}
          <br></br>
          <b>%message-shared</b> {"{"} <br></br>
          <Text.Orange className="nr_idents1">border</Text.Orange>: 1px solid
          #ccc; <br></br>
          <Text.Orange className="nr_idents1">padding</Text.Orange>: 10px;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">color</Text.Orange>: #333;{" "}
          <br></br>
          {"}"} <p></p>
          <Text.Grey>
            // This CSS won't print because %equal-heights is never extended.
          </Text.Grey>{" "}
          <br></br>
          <b>%equal-heights</b> {"{"} <br></br>
          <Text.Orange className="nr_idents1">display</Text.Orange>: flex;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">flex-wrap</Text.Orange>: wrap;{" "}
          <br></br>
          {"}"} <p></p>
          <Text.Green>.message</Text.Green> {"{"} <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          <b>@extend</b> <Text.Pink>%message-shared</Text.Pink>; <br></br>
          {"}"} <p></p>
          <Text.Green>.success</Text.Green> {"{"} <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          <b>@extend</b> <Text.Pink>%message-shared</Text.Pink>; <br></br>
          <Text.Orange className="nr_idents1">border-color</Text.Orange>: green;{" "}
          <br></br>
          {"}"} <p></p>
          <Text.Green>.error</Text.Green> {"{"} <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          <b>@extend</b> <Text.Pink>%message-shared</Text.Pink>; <br></br>
          <Text.Orange className="nr_idents1">border-color</Text.Orange>: red;{" "}
          <br></br>
          {"}"} <p></p>
          <Text.Green>.warning</Text.Green> {"{"} <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          <b>@extend</b> <Text.Pink>%message-shared</Text.Pink>; <br></br>
          <Text.Orange className="nr_idents1">border-color</Text.Orange>:
          yellow; <br></br>
          {"}"}
        </div>
        <div>
          <Text.Grey>css</Text.Grey> <p></p>
          <Text.Grey>
            /* This CSS will print because %message-shared is extended. */
          </Text.Grey>{" "}
          <br></br>
          <Text.Green>.warning</Text.Green>, <Text.Green>.error</Text.Green>,{" "}
          <Text.Green>.success</Text.Green>, <Text.Green>.message</Text.Green>{" "}
          {"{"} <br></br>
          <Text.Orange className="nr_idents1">border</Text.Orange>: 1px solid
          #ccc; <br></br>
          <Text.Orange className="nr_idents1">pading</Text.Orange>: 10px;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">color</Text.Orange>: #333;{" "}
          <br></br>
          {"}"} <p></p>
          <Text.Green>.success</Text.Green> {"{"} <br></br>
          <Text.Orange className="nr_idents1">border-color</Text.Orange>: green;{" "}
          <br></br>
          {"}"} <p></p>
          <Text.Green>.error</Text.Green> {"{"} <br></br>
          <Text.Orange className="nr_idents1">border-color</Text.Orange>: red;{" "}
          <br></br>
          {"}"} <p></p>
          <Text.Green>.warning</Text.Green> {"{"} <br></br>
          <Text.Orange className="nr_idents1">border-color</Text.Orange>:
          yellow; <br></br>
          {"}"}
        </div>
      </div>
      <div>You can also extend another selector</div>
      <div className="info infoWithExample">
        <div>
          <Text.Grey>scss</Text.Grey> <p></p>
          <Text.Green>.button-basic</Text.Green> {"{"} <br></br>
          <Text.Orange className="nr_idents1">border</Text.Orange>: none;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">pading</Text.Orange>: 15px 30px;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">text-align</Text.Orange>: center;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">font-size</Text.Orange>: 16px;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">cursor</Text.Orange>: pointer;{" "}
          <br></br>
          {"}"} <p></p>
          <Text.Green>.button-report</Text.Green> {"{"} <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          <b>@extend</b> .button-basic; <br></br>
          <Text.Orange className="nr_idents1">background-color</Text.Orange>:
          red; <br></br>
          {"}"} <p></p>
          <Text.Green>.button-submit</Text.Green> {"{"} <br></br>
          <Text.Black className="nr_idents1"></Text.Black>
          <b>@extend</b> .button-basic; <br></br>
          <Text.Orange className="nr_idents1">background-color</Text.Orange>:
          green; <br></br>
          <Text.Orange className="nr_idents1">color</Text.Orange>: white;{" "}
          <br></br>
          {"}"} <p></p>
        </div>
        <div>
          <Text.Grey>css</Text.Grey> <p></p>
          <Text.Green>.button-basic</Text.Green>,{" "}
          <Text.Green>.button-submit</Text.Green>,{" "}
          <Text.Green>.button-report</Text.Green> {"{"} <br></br>
          <Text.Orange className="nr_idents1">border</Text.Orange>: none;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">padding</Text.Orange>: 15px 30px;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">text-align</Text.Orange>: center;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">font-size</Text.Orange>: 16px;{" "}
          <br></br>
          <Text.Orange className="nr_idents1">cursor</Text.Orange>: pointer;{" "}
          <br></br>
          {"}"}
          <p></p>
          <Text.Green>.button-report</Text.Green> {"{"} <br></br>
          <Text.Orange className="nr_idents1">background-color</Text.Orange>:
          red; <br></br>
          {"}"}
          <p></p>
          <Text.Green>.button-submit</Text.Green> {"{"} <br></br>
          <Text.Orange className="nr_idents1">background-color</Text.Orange>:
          green; <br></br>
          <Text.Orange className="nr_idents1">color</Text.Orange>: white;{" "}
          <br></br>
          {"}"}
          <p></p>
        </div>
      </div>
      <h3>Operators</h3>
      <div>
        Doing math in your CSS is very helpful. Sass has a handful of standard
        math operators like +, -, *, math.div(), and %.
      </div>
      <div className="examples">
        <b>@use</b> <Text.Pink>"sass:math"</Text.Pink>; <p></p>
        <Text.Green>article[role="main"] </Text.Green>
        {"{"} <br></br>
        <Text.Orange className="nr_idents1">width</Text.Orange>:{" "}
        <Text.Pink>math.div</Text.Pink>(600px, 960px) <Text.Pink>*</Text.Pink>{" "}
        100%; <br></br>
        {"}"}
      </div>
    </>
  );
};

export default HTML;
