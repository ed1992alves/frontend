import React from "react";
import * as Text from "../Utils/Text";

const This = () => {
  return (
    <>
      <h2>Cookies and Web Storage</h2>
      <div>
        JavaScript provides three mechanisms for storing data on the client −
        cookies, session storage, and local storage.
        <p></p>
        <b>Local storage</b> is the most recent mechanism. It allows for larger
        amounts of data to be stored, but the data is not deleted when the
        browser is closed. Local storage is useful for storing data that the
        user will need to access later, such as offline data.
        <p></p>
        <b>Session storage</b> is similar to local storage, but the data is only
        stored for the current session. This means that the data will be deleted
        when the user closes the browser. Session storage is useful for storing
        data that is sensitive, such as login credentials.
        <p></p>
        <b>Cookies</b> are the oldest and most well-known mechanism. They are
        simple to use and well supported by browsers. However, they are limited
        to 4KB of data and are often used to store data that is not sensitive,
        such as user preferences.
      </div>

      <h2>Local Storage</h2>
      <div>
        Most web applications these days require some type of user input,
        whether it be for a username, shipping address, or even just a
        preferences setting. This input is then usually sent off to a server
        somewhere to be processed and stored. However, what if your application
        needs to store data locally on the user’s computer? This is where Local
        Storage comes in.
        <p></p>
        Local Storage is a type of web storage that allows JavaScript to store
        and access data right in the browser. This is especially useful for
        storing data that you want to persist even if the user closes the
        browser, such as preferences or settings.
        <p></p>
        The data in Local Storage is stored in key/value pairs. The key is like
        the name of the data, and the value is like the actual data itself. You
        can think of it as a variable in JavaScript. To store data in Local
        Storage, you first need to create a key. Then you can store any data you
        want under that key.
        <p></p>
        To store data, you use the setItem() method. You pass the key as the
        first argument and the data you want to store as the second argument.
      </div>
      <div className="examples">
        localStorage.<Text.Orange>setItem</Text.Orange>(
        <Text.Green>'key'</Text.Green>, <Text.Green>'value'</Text.Green>);
      </div>
      <div>
        To retrieve data from Local Storage, you use the getItem() method.
      </div>
      <div className="examples">
        localStorage.<Text.Orange>getItem</Text.Orange>(
        <Text.Green>'key'</Text.Green>);
      </div>
      <div>
        If you want to remove an item from Local Storage, you use the
        removeItem() method.
      </div>
      <div className="examples">
        localStorage.<Text.Orange>removeItem</Text.Orange>(
        <Text.Green>'key'</Text.Green>);
      </div>
      <h2>Session Storage</h2>
      <div>
        Session Storage is a new feature introduced in HTML5 that allows you to
        store data locally in the user's browser. Unlike cookies, data stored in
        session storage is specific to the site on which it was created and data
        is not shared with other sites.
        <p></p>
        It's similar to local storage, but with a few key differences
        <ul>
          <li>
            Session Storage data is only available to the site that created it.
          </li>
          <li>Session Storage data is not shared with other sites.</li>
          <li>
            Session Storage data is not persistent, meaning it is only available
            for the duration of the user's session on a site.
          </li>
          <li>
            Session Storage data is specific to the browser tab in which it was
            created.
          </li>
        </ul>
        Session Storage is a great way to improve the performance of your web
        applications by reducing the amount of data that needs to be transferred
        between the client and server. It can also be used to store data in a
        more secure way since the data is not stored in cookies where it can be
        accessed by third-party sites.
        <p></p>
        To use Session Storage in your web applications, you'll need to use the
        sessionStorage object. This object provides access to the current
        session's storage. The sessionStorage object has two methods:
        <p></p>
        <b>setItem()</b> − This method sets a key/value pair in the session
        storage.
      </div>
      <div className="examples">
        sessionStorage.<Text.Orange>setItem</Text.Orange>(
        <Text.Green>'name'</Text.Green>, <Text.Green>'value'</Text.Green>);
      </div>
      <div>
        <b>getItem()</b> − This method retrieves the value of a key from the
        session storage. storage.
      </div>
      <div className="examples">
        <Text.Purple>var</Text.Purple> name = sessionStorage.
        <Text.Orange>getItem</Text.Orange>(<Text.Green>'name'</Text.Green>);
      </div>
      <div>
        The sessionStorage object also has a couple of other properties<p></p>
        <ul>
          <li>
            <b>length</b> − This property returns the number of key/value pairs
            in the session storage.
          </li>
          <li>
            <b>key()</b> − This method accepts an index as a parameter and
            returns the key at that index in the session storage
          </li>
        </ul>
      </div>

      <h2>Cookies</h2>
      <div>
        A cookie is a small piece of data that is stored on the user's computer.
        Cookies are used to store information about the user such as their name,
        password, and preferences. Cookies are created using the document.cookie
        property. This property is used to set, get, and delete cookies.
      </div>
      <div className="examples">
        document.cookie = <Text.Green>"name=tutorialsPoint"</Text.Green>;<p></p>
        <Text.Purple>var</Text.Purple> user = document.cookie.
        <Text.Orange>getItem</Text.Orange>(<Text.Green>'name'</Text.Green>);
      </div>

      <h2>Difference</h2>

      <table className="units">
        <thead>
          <tr>
            <th>Local Storage</th>
            <th>Session Storage</th>
            <th>Cookies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>It allows 10MB of data to be stored.</td>
            <td>It allows 5MB of data to be stored.</td>
            <td>The storage capacity is limited to 4KB of data.</td>
          </tr>
          <tr>
            <td>The stored data is not deleted when the browser is closed.</td>
            <td>
              The data is stored only for the session and will be deleted when
              the browser is closed.
            </td>
            <td>The data can be set to expire at a certain time.</td>
          </tr>
          <tr>
            <td>
              Useful for storing data that you want to persist such as
              preferences or settings.
            </td>
            <td>
              Useful for storing data that is sensitive, such as login
              credentials.
            </td>
            <td>
              Used to store data that is not sensitive, such as user preferences
            </td>
          </tr>
          <tr>
            <td colSpan="2">New feature introduced in HTML5</td>
            <td>Oldest (HTML4) and most wellknown mechanism.</td>
          </tr>
          <tr>
            <td colSpan="2">
              The data is not sent with the request from the client to the
              server.
            </td>
            <td>
              The data is sent with the request from the client to the server
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default This;
