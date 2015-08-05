<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [ExaminingPublisherSubscriber](/action/fullsearch/ROS/Tutorials/ExaminingPublisherSubscriber?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FExaminingPublisherSubscriber%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: writing a simple publisher and subscriber [(python)](/ROS/Tutorials/WritingPublisherSubscriber%28python%29) [(c++)](/ROS/Tutorials/WritingPublisherSubscriber%28c%2B%2B%29).</td>

</tr>

</tbody>

</table>

</div>

<span class="anchor" id="line-3-1"></span><span class="anchor" id="line-4-1"></span><span class="anchor" id="line-5-1"></span><span class="anchor" id="line-6-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #bbceee">![(!)](/moin_static197/rostheme/img/idea.png "(!)")It is appreciated that problems/questions regarding this tutorial are asked on [answers.ros.org](http://answers.ros.org). Don't forget to include in your question the link to this page, versions of your OS & ROS, and also add appropriate tags.</td>

</tr>

</tbody>

</table>

</div>

<span class="anchor" id="line-7-1"></span><span class="anchor" id="line-8-1"></span><span class="anchor" id="line-9-1"></span>

## Examining the Simple Publisher and Subscriber

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial examines running the simple publisher and subscriber.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** Writing a simple service and client [(python)](/ROS/Tutorials/WritingServiceClient%28python%29) [(c++)](/ROS/Tutorials/WritingServiceClient%28c%2B%2B%29)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span>

<div class="table-of-contents">

Contents

1.  [Running the Publisher](#Running_the_Publisher)
2.  [Running the Subscriber](#Running_the_Subscriber)

</div>

<span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span>

### Running the Publisher

<span class="anchor" id="line-24"></span>

Make sure that a roscore is up and running:<span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span><span class="anchor" id="line-27"></span>

<pre><span class="anchor" id="line-1-2"></span>$ roscore</pre>

<span class="anchor" id="line-28"></span><span class="anchor" id="line-29"></span>

<span style="background-color:#FFFF00; font-weight:bold; padding: 3px;">catkin specific</span> <span class="anchor" id="line-30"></span>If you are using catkin, make sure you have sourced your workspace's setup.sh file after calling <tt class="backtick">catkin_make</tt> but before trying to use your applications:<span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span>

<span class="anchor" id="line-33"></span><span class="anchor" id="line-34"></span><span class="anchor" id="line-35"></span><span class="anchor" id="line-36"></span>

<pre><span class="anchor" id="line-1-3"></span># In your catkin workspace
<span class="anchor" id="line-2-2"></span>$ cd ~/catkin_ws
<span class="anchor" id="line-3-2"></span>$ source ./devel/setup.bash</pre>

<span class="anchor" id="line-37"></span><span class="anchor" id="line-38"></span>

In the last tutorial we made a publisher called "talker". Let's run it:<span class="anchor" id="line-39"></span><span class="anchor" id="line-40"></span><span class="anchor" id="line-41"></span><span class="anchor" id="line-42"></span>

<pre><span class="anchor" id="line-1-4"></span>$ rosrun beginner_tutorials talker      (C++)
<span class="anchor" id="line-2-3"></span>$ rosrun beginner_tutorials talker.py   (Python) </pre>

<span class="anchor" id="line-43"></span>

You will see something similar to:<span class="anchor" id="line-44"></span>

*   <span class="anchor" id="line-45"></span><span class="anchor" id="line-46"></span><span class="anchor" id="line-47"></span><span class="anchor" id="line-48"></span><span class="anchor" id="line-49"></span><span class="anchor" id="line-50"></span><span class="anchor" id="line-51"></span>

    <pre><span class="anchor" id="line-1-5"></span>[INFO] [WallTime: 1314931831.774057] hello world 1314931831.77
    <span class="anchor" id="line-2-4"></span>[INFO] [WallTime: 1314931832.775497] hello world 1314931832.77
    <span class="anchor" id="line-3-3"></span>[INFO] [WallTime: 1314931833.778937] hello world 1314931833.78
    <span class="anchor" id="line-4-2"></span>[INFO] [WallTime: 1314931834.782059] hello world 1314931834.78
    <span class="anchor" id="line-5-2"></span>[INFO] [WallTime: 1314931835.784853] hello world 1314931835.78
    <span class="anchor" id="line-6-2"></span>[INFO] [WallTime: 1314931836.788106] hello world 1314931836.79</pre>

    <span class="anchor" id="line-52"></span>

The publisher node is up and running. Now we need a subscriber to receive messages from the publisher.<span class="anchor" id="line-53"></span><span class="anchor" id="line-54"></span>

### Running the Subscriber

<span class="anchor" id="line-55"></span>

In the last tutorial we made a subscriber called "listener". Let's run it:<span class="anchor" id="line-56"></span><span class="anchor" id="line-57"></span><span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span>

<pre><span class="anchor" id="line-1-6"></span>$ rosrun beginner_tutorials listener     (C++)
<span class="anchor" id="line-2-5"></span>$ rosrun beginner_tutorials listener.py  (Python) </pre>

<span class="anchor" id="line-60"></span>

You will see something similar to:<span class="anchor" id="line-61"></span>

*   <span class="anchor" id="line-62"></span><span class="anchor" id="line-63"></span><span class="anchor" id="line-64"></span><span class="anchor" id="line-65"></span><span class="anchor" id="line-66"></span><span class="anchor" id="line-67"></span><span class="anchor" id="line-68"></span><span class="anchor" id="line-69"></span><span class="anchor" id="line-70"></span>

    <pre><span class="anchor" id="line-1-7"></span>[INFO] [WallTime: 1314931969.258941] /listener_17657_1314931968795I heard hello world 1314931969.26
    <span class="anchor" id="line-2-6"></span>[INFO] [WallTime: 1314931970.262246] /listener_17657_1314931968795I heard hello world 1314931970.26
    <span class="anchor" id="line-3-4"></span>[INFO] [WallTime: 1314931971.266348] /listener_17657_1314931968795I heard hello world 1314931971.26
    <span class="anchor" id="line-4-3"></span>[INFO] [WallTime: 1314931972.270429] /listener_17657_1314931968795I heard hello world 1314931972.27
    <span class="anchor" id="line-5-3"></span>[INFO] [WallTime: 1314931973.274382] /listener_17657_1314931968795I heard hello world 1314931973.27
    <span class="anchor" id="line-6-3"></span>[INFO] [WallTime: 1314931974.277694] /listener_17657_1314931968795I heard hello world 1314931974.28
    <span class="anchor" id="line-7-2"></span>[INFO] [WallTime: 1314931975.283708] /listener_17657_1314931968795I heard hello world 1314931975.28</pre>

    <span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span>

Now that you have examined the simple publisher and subscriber, let's write a simple service and client [(python)](/ROS/Tutorials/WritingServiceClient%28python%29) [(c++)](/ROS/Tutorials/WritingServiceClient%28c%2B%2B%29).<span class="anchor" id="line-73"></span><span class="anchor" id="line-74"></span>

<span class="anchor" id="line-75"></span>

<span class="anchor" id="line-76"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/ExaminingPublisherSubscriber (last edited 2012-11-27 01:21:59 by <span title="William J. Woodall @ gw.willowgarage.com[70.35.54.194]">[WilliamWoodall](/WilliamWoodall "William J. Woodall @ gw.willowgarage.com[70.35.54.194]")</span>)
