import React, { useState } from "react";
import eventLoop1 from "../styles/images/eventLoop.svg";
import eventLoop2 from "../styles/images/eventLoop2.svg";
import eventLoop3 from "../styles/images/eventLoop3.svg";
import eventLoop4 from "../styles/images/eventLoop4.png";
import "../styles/eventLoop.less";

import * as Text from "../Utils/Text";

const EventLoop = () => {
  return (
    <>
      <div>
        The event loop is the secret behind JavaScript’s asynchronous
        programming. JS executes all operations on a single thread, but using a
        few smart data structures, it gives us the illusion of multi-threading.
        <p></p>
        The <b>call stack</b> is responsible for keeping track of all the
        operations in line to be executed. Whenever a function is finished, it
        is popped from the stack.
        <p></p>
        <div class="imageContainer">
          <img src={eventLoop1} id="image1"></img>
        </div>
        The <b>event queue</b> is responsible for sending new functions to the
        stack for processing. It follows the queue data structure to maintain
        the correct sequence in which all operations should be sent for
        execution.
        <div class="imageContainer">
          <img src={eventLoop2} id="image2"></img>
        </div>
        Whenever an async function is called, it is sent to a browser API. These
        are APIs built into the browser. Based on the command received from the
        call stack, the API starts its own single-threaded operation.
        <p></p>
        An example of this is the setTimeout method. When a setTimeout operation
        is processed in the stack, it is sent to the corresponding API which
        waits till the specified time to send this operation back in for
        processing.
        <p></p>
        Where does it send the operation? The event queue. Hence, we have a
        cyclic system for running async operations in JavaScript. The language
        itself is single-threaded, but the browser APIs act as separate threads.
        <p></p>
        The event loop facilitates this process; it constantly checks whether or
        not the call stack is empty. If it is empty, new functions are added
        from the event queue. If it is not, then the current function call is
        processed.
        <div class="imageContainer">
          <img src={eventLoop3} id="image3"></img>
        </div>
      </div>
      <h2>Microtasks and Macrotasks</h2>
      <div>
        An Event Loop in JavaScript is said to be a constantly running process
        that keeps a tab on the call stack. Its main function is to check
        whether the call stack is empty or not. If the call stack turns out to
        be empty, the event loop proceeds to execute all the callbacks waiting
        in the task queue. Inside the task queue, the tasks are broadly
        classified into two categories, namely micro-tasks and macro-tasks.
        <p></p>
        <h4>Micro-tasks</h4> A micro-task is said to be a function that is
        executed after the function or program which created it exits and only
        if the JavaScript execution stack is empty.
        <p></p>
        Micro-tasks are often scheduled for things that are required to be
        completed immediately after the execution of the current script. On
        completion of one macro-task, the event loop moves on to the micro-task
        queue. The event loop does not move to the next task outside of the
        micro-task queue until all the tasks inside the micro-task queue are
        completed. This implies that the micro-task queue has a higher priority.
        <p></p>
        Once all the tasks inside the micro-task queue are finished, only then
        does the event loop shifts back to the macro-task queue. The primary
        reason for prioritizing the micro-task queue is to improve the user
        experience. The micro-task queue is processed after callbacks given that
        any other JavaScript is not under mid-execution.
        <p></p>
        <b>Examples:</b> process.nextTick, Promises
        <p></p>
        <h4>Macro-tasks</h4> Macro-task represents some discrete and independent
        work. These are always the execution of the JavaScript code and the
        micro-task queue is empty. Macro-task queue is often considered the same
        as the task queue or the event queue. However, the macro-task queue
        works the same as the task queue. The only small difference between the
        two is that the task queue is used for synchronous statements whereas
        the macro-task queue is used for asynchronous statements.
        <p></p>
        In JavaScript, no code is allowed to execute until an event has occurred
        (It is worth mentioning that the execution of a JavaScript code
        execution is itself a macro-task). The event is queued as a macro-task.
        When a (macro) task, present in the macro-task queue is being executed,
        new events may be registered and in turn, created and added to the
        queue.
        <p></p>
        <b>Examples:</b> setTimeout, setInterval, setImmediate,
        requestAnimationFrame, I/O, UI Rendering
        <div class="imageContainer">
          <img src={eventLoop4} id="image4"></img>
        </div>
        <div className="examples">
          <Text.Orange>setTimeout</Text.Orange>(() => console.
          <Text.Orange>log</Text.Orange>(<Text.Green>"timeout"</Text.Green>));{" "}
          <p></p>
          <Text.Purple>Promise</Text.Purple>.<Text.Orange>resolve</Text.Orange>
          ().
          <Text.Orange>then</Text.Orange>(() => console.
          <Text.Orange>log</Text.Orange>(<Text.Green>"promise"</Text.Green>));{" "}
          <p></p>
          console.<Text.Orange>log</Text.Orange>(<Text.Green>"code"</Text.Green>
          );<p></p>
          <Text.Black className="hover">SOLUTION: </Text.Black>
          <Text.Grey>code promise timeout</Text.Grey>
        </div>
        <div className="examples">
          console.<Text.Orange>log</Text.Orange>(<Text.Pink>1</Text.Pink>);{" "}
          <p></p>
          <Text.Orange>setTimeout</Text.Orange>(() => console.
          <Text.Orange>log</Text.Orange>(<Text.Pink>2</Text.Pink>));
          <p></p>
          <Text.Purple>Promise</Text.Purple>.<Text.Orange>resolve</Text.Orange>
          ().then(() => console.
          <Text.Orange>log</Text.Orange>(<Text.Pink>3</Text.Pink>));
          <p></p>
          <Text.Purple>Promise</Text.Purple>.<Text.Orange>resolve</Text.Orange>
          ().then(() => <Text.Orange>setTimeout</Text.Orange>(() => console.
          <Text.Orange>log</Text.Orange>(<Text.Pink>4</Text.Pink>)));
          <p></p>
          <Text.Purple>Promise</Text.Purple>.<Text.Orange>resolve</Text.Orange>
          ().then(() => <Text.Purple>Promise</Text.Purple>.
          <Text.Orange>resolve</Text.Orange>().then(() => console.
          <Text.Orange>log</Text.Orange>(<Text.Pink>5</Text.Pink>)));
          <p></p>
          <Text.Purple>Promise</Text.Purple>.<Text.Orange>resolve</Text.Orange>
          ().then(() => console.
          <Text.Orange>log</Text.Orange>(<Text.Pink>6</Text.Pink>));
          <p></p>
          <Text.Orange>setTimeout</Text.Orange>(() => console.
          <Text.Orange>log</Text.Orange>(<Text.Pink>7</Text.Pink>));
          <p></p>console.<Text.Orange>log</Text.Orange>(<Text.Pink>8</Text.Pink>
          ); <p></p>
          <Text.Black className="hover">SOLUTION: </Text.Black>
          <Text.Grey>1 8 3 6 5 2 7 4</Text.Grey>
        </div>
      </div>
    </>
  );
};

export default EventLoop;
