<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [UnderstandingTopics](/action/fullsearch/ROS/Tutorials/UnderstandingTopics?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FUnderstandingTopics%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [understanding ROS nodes](/ROS/Tutorials/UnderstandingNodes).</td>

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

## Understanding ROS Topics

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial introduces ROS topics as well as using the [rostopic](/rostopic) and [rqt_plot](/rqt_plot) commandline tools.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Understanding ROS services and parameters](/ROS/Tutorials/UnderstandingServicesParams)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span>

<div class="table-of-contents">

Contents

1.  1.  [Setup](#Setup)
        1.  [roscore](#roscore)
        2.  [turtlesim](#turtlesim)
        3.  [turtle keyboard teleoperation](#turtle_keyboard_teleoperation)
    2.  [ROS Topics](#ROS_Topics)
        1.  [Using rqt_graph](#Using_rqt_graph)
        2.  [Introducing rostopic](#Introducing_rostopic)
        3.  [Using rostopic echo](#Using_rostopic_echo)
        4.  [Using rostopic list](#Using_rostopic_list)
    3.  [ROS Messages](#ROS_Messages)
        1.  [Using rostopic type](#Using_rostopic_type)
    4.  [rostopic continued](#rostopic_continued)
        1.  [Using rostopic pub](#Using_rostopic_pub)
        2.  [Using rostopic hz](#Using_rostopic_hz)
    5.  [Using rqt_plot](#Using_rqt_plot)
2.  [Video Tutorial](#Video_Tutorial)

</div>

<span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span>

### Setup

<span class="anchor" id="line-23"></span><span class="anchor" id="line-24"></span>

#### roscore

<span class="anchor" id="line-25"></span>

Let's start by making sure that we have roscore running, **in a new terminal**:<span class="anchor" id="line-26"></span><span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

<pre><span class="anchor" id="line-1-2"></span>$ roscore</pre>

<span class="anchor" id="line-29"></span>

If you left roscore running from the last tutorial, you may get the error message:<span class="anchor" id="line-30"></span>

*   <span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span><span class="anchor" id="line-33"></span>

    <pre><span class="anchor" id="line-1-3"></span>roscore cannot run as another roscore/master is already running. 
    <span class="anchor" id="line-2-2"></span>Please kill other roscore/master processes before relaunching</pre>

    <span class="anchor" id="line-34"></span>

This is fine. Only one roscore needs to be running.<span class="anchor" id="line-35"></span><span class="anchor" id="line-36"></span><span class="anchor" id="line-37"></span>

#### turtlesim

<span class="anchor" id="line-38"></span>

For this tutorial we will also use turtlesim. Please run **in a new terminal**:<span class="anchor" id="line-39"></span><span class="anchor" id="line-40"></span><span class="anchor" id="line-41"></span>

<pre><span class="anchor" id="line-1-4"></span>$ rosrun turtlesim turtlesim_node</pre>

<span class="anchor" id="line-42"></span><span class="anchor" id="line-43"></span>

#### turtle keyboard teleoperation

<span class="anchor" id="line-44"></span>

We'll also need something to drive the turtle around with. Please run **in a new terminal**:<span class="anchor" id="line-45"></span><span class="anchor" id="line-46"></span><span class="anchor" id="line-47"></span>

<pre><span class="anchor" id="line-1-5"></span>$ rosrun turtlesim turtle_teleop_key</pre>

<span class="anchor" id="line-48"></span>

*   <span class="anchor" id="line-49"></span><span class="anchor" id="line-50"></span><span class="anchor" id="line-51"></span><span class="anchor" id="line-52"></span><span class="anchor" id="line-53"></span>

    <pre><span class="anchor" id="line-1-6"></span>[ INFO] 1254264546.878445000: Started node [/teleop_turtle], pid [5528], bound on [aqy], xmlrpc port [43918], tcpros port [55936], logging to [~/ros/ros/log/teleop_turtle_5528.log], using [real] time
    <span class="anchor" id="line-2-3"></span>Reading from keyboard
    <span class="anchor" id="line-3-2"></span>---------------------------
    <span class="anchor" id="line-4-2"></span>Use arrow keys to move the turtle.</pre>

    <span class="anchor" id="line-54"></span><span class="anchor" id="line-55"></span>

Now you can use the arrow keys of the keyboard to drive the turtle around. If you can not drive the turtle **select the terminal window of the turtle_teleop_key** to make sure that the keys that you type are recorded.<span class="anchor" id="line-56"></span><span class="anchor" id="line-57"></span>

*   ![turtle_key.png](/ROS/Tutorials/UnderstandingTopics?action=AttachFile&do=get&target=turtle_key.png "turtle_key.png")<span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span>

Now that you can drive your turtle around, let's look at what's going on behind the scenes.<span class="anchor" id="line-60"></span><span class="anchor" id="line-61"></span>

### ROS Topics

<span class="anchor" id="line-62"></span>

The <tt class="backtick">turtlesim_node</tt> and the <tt class="backtick">turtle_teleop_key</tt> node are communicating with each other over a ROS **Topic**. <tt class="backtick">turtle_teleop_key</tt> is **publishing** the key strokes on a topic, while <tt class="backtick">turtlesim</tt> **subscribes** to the same topic to receive the key strokes. Let's use [rqt_graph](/rqt_graph) which shows the nodes and topics currently running.<span class="anchor" id="line-63"></span><span class="anchor" id="line-64"></span>

Note: If you're using <tt class="backtick">electric</tt> or earlier, <tt class="backtick">rqt</tt> is not available. Use <tt class="backtick">rxgraph</tt> instead.<span class="anchor" id="line-65"></span><span class="anchor" id="line-66"></span>

#### Using rqt_graph

<span class="anchor" id="line-67"></span>

<tt class="backtick">rqt_graph</tt> creates a dynamic graph of what's going on in the system. rqt_graph is part of the <tt class="backtick">rqt</tt> package. Unless you already have it installed, run:<span class="anchor" id="line-68"></span><span class="anchor" id="line-69"></span>

*   <span class="anchor" id="line-70"></span><span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span>

    <pre><span class="anchor" id="line-1-7"></span>$ sudo apt-get install ros-<distro>-rqt
    <span class="anchor" id="line-2-4"></span>$ sudo apt-get install ros-<distro>-rqt-common-plugins</pre>

    <span class="anchor" id="line-73"></span>

replacing <distro> with the name of your rosdistribution (fuerte, groovy, etc.)<span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span>

**In a new terminal**:<span class="anchor" id="line-76"></span><span class="anchor" id="line-77"></span>

<span class="anchor" id="line-78"></span><span class="anchor" id="line-79"></span>

<pre><span class="anchor" id="line-1-8"></span>$ rosrun rqt_graph rqt_graph</pre>

<span class="anchor" id="line-80"></span><span class="anchor" id="line-81"></span>

You will see something similar to:<span class="anchor" id="line-82"></span><span class="anchor" id="line-83"></span>

![rqt_graph_turtle_key.png](/ROS/Tutorials/UnderstandingTopics?action=AttachFile&do=get&target=rqt_graph_turtle_key.png "rqt_graph_turtle_key.png")<span class="anchor" id="line-84"></span><span class="anchor" id="line-85"></span>

If you place your mouse over <tt class="backtick">/turtle1/command_velocity</tt> it will highlight the ROS nodes (here blue and green) and topics (here red). As you can see, the <tt class="backtick">turtlesim_node</tt> and the <tt class="backtick">turtle_teleop_key</tt> nodes are communicating on the topic named <tt class="backtick">/turtle1/command_velocity</tt>.<span class="anchor" id="line-86"></span><span class="anchor" id="line-87"></span>

![rqt_graph_turtle_key2.png](/ROS/Tutorials/UnderstandingTopics?action=AttachFile&do=get&target=rqt_graph_turtle_key2.png "rqt_graph_turtle_key2.png")<span class="anchor" id="line-88"></span><span class="anchor" id="line-89"></span>

#### Introducing rostopic

<span class="anchor" id="line-90"></span>

The <tt class="backtick">rostopic</tt> tool allows you to get information about ROS **topics**.<span class="anchor" id="line-91"></span><span class="anchor" id="line-92"></span>

You can use the help option to get the available sub-commands for <tt>rostopic</tt><span class="anchor" id="line-93"></span><span class="anchor" id="line-94"></span><span class="anchor" id="line-95"></span>

<pre><span class="anchor" id="line-1-9"></span>$ rostopic -h</pre>

<span class="anchor" id="line-96"></span>

*   <span class="anchor" id="line-97"></span><span class="anchor" id="line-98"></span><span class="anchor" id="line-99"></span><span class="anchor" id="line-100"></span><span class="anchor" id="line-101"></span><span class="anchor" id="line-102"></span><span class="anchor" id="line-103"></span>

    <pre><span class="anchor" id="line-1-10"></span>rostopic bw     display bandwidth used by topic
    <span class="anchor" id="line-2-5"></span>rostopic echo   print messages to screen
    <span class="anchor" id="line-3-3"></span>rostopic hz     display publishing rate of topic    
    <span class="anchor" id="line-4-3"></span>rostopic list   print information about active topics
    <span class="anchor" id="line-5-2"></span>rostopic pub    publish data to topic
    <span class="anchor" id="line-6-2"></span>rostopic type   print topic type</pre>

    <span class="anchor" id="line-104"></span><span class="anchor" id="line-105"></span>

Let's use some of these topic sub-commands to examine turtlesim.<span class="anchor" id="line-106"></span><span class="anchor" id="line-107"></span>

#### Using rostopic echo

<span class="anchor" id="line-108"></span>

<tt class="backtick">rostopic echo</tt> shows the data published on a topic.<span class="anchor" id="line-109"></span><span class="anchor" id="line-110"></span>

Usage:<span class="anchor" id="line-111"></span><span class="anchor" id="line-112"></span><span class="anchor" id="line-113"></span>

<pre><span class="anchor" id="line-1-11"></span>rostopic echo [topic]</pre>

<span class="anchor" id="line-114"></span>

Let's look at the command velocity data published by the <tt class="backtick">turtle_teleop_key</tt> node.<span class="anchor" id="line-115"></span><span class="anchor" id="line-116"></span>

_For ROS Hydro and later,_ this data is published on the <tt class="backtick">/turtle1/cmd_vel</tt> topic. **In a new terminal, run:**<span class="anchor" id="line-117"></span><span class="anchor" id="line-118"></span><span class="anchor" id="line-119"></span>

<pre><span class="anchor" id="line-1-12"></span>$ rostopic echo /turtle1/cmd_vel</pre>

<span class="anchor" id="line-120"></span>

_For ROS Groovy and earlier,_ this data is published on the <tt class="backtick">/turtle1/command_velocity</tt> topic. **In a new terminal, run:**<span class="anchor" id="line-121"></span><span class="anchor" id="line-122"></span><span class="anchor" id="line-123"></span>

<pre><span class="anchor" id="line-1-13"></span>$ rostopic echo /turtle1/command_velocity</pre>

<span class="anchor" id="line-124"></span><span class="anchor" id="line-125"></span>

You probably won't see anything happen because no data is being published on the topic. Let's make <tt class="backtick">turtle_teleop_key</tt> publish data by pressing the arrow keys. **Remember if the turtle isn't moving you need to select the <tt class="backtick">turtle_teleop_key</tt> terminal again.**<span class="anchor" id="line-126"></span><span class="anchor" id="line-127"></span>

_For ROS Hydro and later,_ you should now see the following when you press the up key:<span class="anchor" id="line-128"></span><span class="anchor" id="line-129"></span><span class="anchor" id="line-130"></span><span class="anchor" id="line-131"></span><span class="anchor" id="line-132"></span><span class="anchor" id="line-133"></span><span class="anchor" id="line-134"></span><span class="anchor" id="line-135"></span><span class="anchor" id="line-136"></span><span class="anchor" id="line-137"></span><span class="anchor" id="line-138"></span><span class="anchor" id="line-139"></span><span class="anchor" id="line-140"></span><span class="anchor" id="line-141"></span><span class="anchor" id="line-142"></span><span class="anchor" id="line-143"></span><span class="anchor" id="line-144"></span><span class="anchor" id="line-145"></span><span class="anchor" id="line-146"></span><span class="anchor" id="line-147"></span><span class="anchor" id="line-148"></span>

<pre><span class="anchor" id="line-1-14"></span>linear: 
<span class="anchor" id="line-2-6"></span>  x: 2.0
<span class="anchor" id="line-3-4"></span>  y: 0.0
<span class="anchor" id="line-4-4"></span>  z: 0.0
<span class="anchor" id="line-5-3"></span>angular: 
<span class="anchor" id="line-6-3"></span>  x: 0.0
<span class="anchor" id="line-7-2"></span>  y: 0.0
<span class="anchor" id="line-8-2"></span>  z: 0.0
<span class="anchor" id="line-9-2"></span>---
<span class="anchor" id="line-10-2"></span>linear: 
<span class="anchor" id="line-11-2"></span>  x: 2.0
<span class="anchor" id="line-12-2"></span>  y: 0.0
<span class="anchor" id="line-13-2"></span>  z: 0.0
<span class="anchor" id="line-14-2"></span>angular: 
<span class="anchor" id="line-15-2"></span>  x: 0.0
<span class="anchor" id="line-16-2"></span>  y: 0.0
<span class="anchor" id="line-17-2"></span>  z: 0.0
<span class="anchor" id="line-18-1"></span>---</pre>

<span class="anchor" id="line-149"></span>

_For ROS Groovy and earlier,_ you should now see the following when you press the up key:<span class="anchor" id="line-150"></span><span class="anchor" id="line-151"></span><span class="anchor" id="line-152"></span><span class="anchor" id="line-153"></span><span class="anchor" id="line-154"></span><span class="anchor" id="line-155"></span><span class="anchor" id="line-156"></span><span class="anchor" id="line-157"></span><span class="anchor" id="line-158"></span><span class="anchor" id="line-159"></span><span class="anchor" id="line-160"></span><span class="anchor" id="line-161"></span><span class="anchor" id="line-162"></span><span class="anchor" id="line-163"></span><span class="anchor" id="line-164"></span><span class="anchor" id="line-165"></span><span class="anchor" id="line-166"></span>

<pre><span class="anchor" id="line-1-15"></span>---
<span class="anchor" id="line-2-7"></span>linear: 2.0
<span class="anchor" id="line-3-5"></span>angular: 0.0
<span class="anchor" id="line-4-5"></span>---
<span class="anchor" id="line-5-4"></span>linear: 2.0
<span class="anchor" id="line-6-4"></span>angular: 0.0
<span class="anchor" id="line-7-3"></span>---
<span class="anchor" id="line-8-3"></span>linear: 2.0
<span class="anchor" id="line-9-3"></span>angular: 0.0
<span class="anchor" id="line-10-3"></span>---
<span class="anchor" id="line-11-3"></span>linear: 2.0
<span class="anchor" id="line-12-3"></span>angular: 0.0
<span class="anchor" id="line-13-3"></span>---
<span class="anchor" id="line-14-3"></span>linear: 2.0
<span class="anchor" id="line-15-3"></span>angular: 0.0</pre>

<span class="anchor" id="line-167"></span><span class="anchor" id="line-168"></span>

Now let's look at <tt class="backtick">rqt_graph</tt> again. Press the refresh button in the upper-left to show the new node. As you can see <tt class="backtick">rostopic echo</tt>, shown here in red, is now also **subscribed** to the <tt class="backtick">turtle1/command_velocity</tt> topic.<span class="anchor" id="line-169"></span><span class="anchor" id="line-170"></span>

![rqt_graph_echo.png](/ROS/Tutorials/UnderstandingTopics?action=AttachFile&do=get&target=rqt_graph_echo.png "rqt_graph_echo.png")<span class="anchor" id="line-171"></span><span class="anchor" id="line-172"></span>

#### Using rostopic list

<span class="anchor" id="line-173"></span>

<tt class="backtick">rostopic list</tt> returns a list of all topics currently subscribed to and published.<span class="anchor" id="line-174"></span><span class="anchor" id="line-175"></span>

Lets figure out what argument the <tt class="backtick">list</tt> sub-command needs. In a **new terminal** run:<span class="anchor" id="line-176"></span><span class="anchor" id="line-177"></span><span class="anchor" id="line-178"></span>

<pre><span class="anchor" id="line-1-16"></span>$ rostopic list -h</pre>

<span class="anchor" id="line-179"></span>

*   <span class="anchor" id="line-180"></span><span class="anchor" id="line-181"></span><span class="anchor" id="line-182"></span><span class="anchor" id="line-183"></span><span class="anchor" id="line-184"></span><span class="anchor" id="line-185"></span><span class="anchor" id="line-186"></span><span class="anchor" id="line-187"></span><span class="anchor" id="line-188"></span><span class="anchor" id="line-189"></span>

    <pre><span class="anchor" id="line-1-17"></span>Usage: rostopic list [/topic]
    <span class="anchor" id="line-2-8"></span>
    <span class="anchor" id="line-3-6"></span>Options:
    <span class="anchor" id="line-4-6"></span>  -h, --help            show this help message and exit
    <span class="anchor" id="line-5-5"></span>  -b BAGFILE, --bag=BAGFILE
    <span class="anchor" id="line-6-5"></span>                        list topics in .bag file
    <span class="anchor" id="line-7-4"></span>  -v, --verbose         list full details about each topic
    <span class="anchor" id="line-8-4"></span>  -p                    list only publishers
    <span class="anchor" id="line-9-4"></span>  -s                    list only subscribers</pre>

    <span class="anchor" id="line-190"></span><span class="anchor" id="line-191"></span>

For <tt>rostopic list</tt> use the **verbose** option:<span class="anchor" id="line-192"></span><span class="anchor" id="line-193"></span><span class="anchor" id="line-194"></span>

<pre><span class="anchor" id="line-1-18"></span>$ rostopic list -v</pre>

<span class="anchor" id="line-195"></span>

This displays a verbose list of topics to publish to and subscribe to and their type.<span class="anchor" id="line-196"></span>

*   <span class="anchor" id="line-197"></span><span class="anchor" id="line-198"></span><span class="anchor" id="line-199"></span><span class="anchor" id="line-200"></span><span class="anchor" id="line-201"></span><span class="anchor" id="line-202"></span><span class="anchor" id="line-203"></span><span class="anchor" id="line-204"></span><span class="anchor" id="line-205"></span><span class="anchor" id="line-206"></span><span class="anchor" id="line-207"></span><span class="anchor" id="line-208"></span>

    <pre><span class="anchor" id="line-1-19"></span>Published topics:
    <span class="anchor" id="line-2-9"></span> * /turtle1/color_sensor [turtlesim/Color] 1 publisher
    <span class="anchor" id="line-3-7"></span> * /turtle1/command_velocity [turtlesim/Velocity] 1 publisher
    <span class="anchor" id="line-4-7"></span> * /rosout [roslib/Log] 2 publishers
    <span class="anchor" id="line-5-6"></span> * /rosout_agg [roslib/Log] 1 publisher
    <span class="anchor" id="line-6-6"></span> * /turtle1/pose [turtlesim/Pose] 1 publisher
    <span class="anchor" id="line-7-5"></span>
    <span class="anchor" id="line-8-5"></span>Subscribed topics:
    <span class="anchor" id="line-9-5"></span> * /turtle1/command_velocity [turtlesim/Velocity] 1 subscriber
    <span class="anchor" id="line-10-4"></span> * /rosout [roslib/Log] 1 subscriber</pre>

    <span class="anchor" id="line-209"></span><span class="anchor" id="line-210"></span><span class="anchor" id="line-211"></span>

### ROS Messages

<span class="anchor" id="line-212"></span>

Communication on topics happens by sending ROS **messages** between nodes. For the publisher (<tt class="backtick">turtle_teleop_key</tt>) and subscriber (<tt class="backtick">turtlesim_node</tt>) to communicate, the publisher and subscriber must send and receive the same **type** of message. This means that a topic **type** is defined by the message **type** published on it. The **type** of the message sent on a topic can be determined using <tt class="backtick">rostopic type</tt>.<span class="anchor" id="line-213"></span><span class="anchor" id="line-214"></span>

#### Using rostopic type

<span class="anchor" id="line-215"></span>

<tt>rostopic type</tt> returns the message type of any topic being published.<span class="anchor" id="line-216"></span><span class="anchor" id="line-217"></span>

Usage:<span class="anchor" id="line-218"></span><span class="anchor" id="line-219"></span><span class="anchor" id="line-220"></span>

<pre><span class="anchor" id="line-1-20"></span>rostopic type [topic]</pre>

<span class="anchor" id="line-221"></span>

_For ROS Hydro and later,_<span class="anchor" id="line-222"></span>

*   Try:<span class="anchor" id="line-223"></span><span class="anchor" id="line-224"></span><span class="anchor" id="line-225"></span>

    <pre><span class="anchor" id="line-1-21"></span>$ rostopic type /turtle1/cmd_vel</pre>

    <span class="anchor" id="line-226"></span>
    *   You should get:<span class="anchor" id="line-227"></span><span class="anchor" id="line-228"></span><span class="anchor" id="line-229"></span>

        <pre><span class="anchor" id="line-1-22"></span>geometry_msgs/Twist</pre>

        <span class="anchor" id="line-230"></span>

    We can look at the details of the message using <tt class="backtick">rosmsg</tt>:<span class="anchor" id="line-231"></span><span class="anchor" id="line-232"></span><span class="anchor" id="line-233"></span>

    <pre><span class="anchor" id="line-1-23"></span>$ rosmsg show geometry_msgs/Twist</pre>

    <span class="anchor" id="line-234"></span>
    *   <span class="anchor" id="line-235"></span><span class="anchor" id="line-236"></span><span class="anchor" id="line-237"></span><span class="anchor" id="line-238"></span><span class="anchor" id="line-239"></span><span class="anchor" id="line-240"></span><span class="anchor" id="line-241"></span><span class="anchor" id="line-242"></span><span class="anchor" id="line-243"></span>

        <pre><span class="anchor" id="line-1-24"></span>geometry_msgs/Vector3 linear
        <span class="anchor" id="line-2-10"></span>  float64 x
        <span class="anchor" id="line-3-8"></span>  float64 y
        <span class="anchor" id="line-4-8"></span>  float64 z
        <span class="anchor" id="line-5-7"></span>geometry_msgs/Vector3 angular
        <span class="anchor" id="line-6-7"></span>  float64 x
        <span class="anchor" id="line-7-6"></span>  float64 y
        <span class="anchor" id="line-8-6"></span>  float64 z</pre>

        <span class="anchor" id="line-244"></span><span class="anchor" id="line-245"></span>

_For ROS Groovy and earlier,_<span class="anchor" id="line-246"></span>

*   Try:<span class="anchor" id="line-247"></span><span class="anchor" id="line-248"></span><span class="anchor" id="line-249"></span>

    <pre><span class="anchor" id="line-1-25"></span>$ rostopic type /turtle1/command_velocity</pre>

    <span class="anchor" id="line-250"></span>
    *   You should get:<span class="anchor" id="line-251"></span><span class="anchor" id="line-252"></span><span class="anchor" id="line-253"></span>

        <pre><span class="anchor" id="line-1-26"></span>turtlesim/Velocity</pre>

        <span class="anchor" id="line-254"></span>

    We can look at the details of the message using <tt class="backtick">rosmsg</tt>:<span class="anchor" id="line-255"></span><span class="anchor" id="line-256"></span><span class="anchor" id="line-257"></span>

    <pre><span class="anchor" id="line-1-27"></span>$ rosmsg show turtlesim/Velocity</pre>

    <span class="anchor" id="line-258"></span>
    *   <span class="anchor" id="line-259"></span><span class="anchor" id="line-260"></span><span class="anchor" id="line-261"></span>

        <pre><span class="anchor" id="line-1-28"></span>float32 linear
        <span class="anchor" id="line-2-11"></span>float32 angular</pre>

        <span class="anchor" id="line-262"></span><span class="anchor" id="line-263"></span>

Now that we know what type of message turtlesim expects, we can publish commands to our turtle.<span class="anchor" id="line-264"></span><span class="anchor" id="line-265"></span><span class="anchor" id="line-266"></span>

### rostopic continued

<span class="anchor" id="line-267"></span>

Now that we have learned about ROS **messages**, let's use rostopic with messages.<span class="anchor" id="line-268"></span><span class="anchor" id="line-269"></span>

#### Using rostopic pub

<span class="anchor" id="line-270"></span>

<tt class="backtick">rostopic pub</tt> publishes data on to a topic currently advertised.<span class="anchor" id="line-271"></span><span class="anchor" id="line-272"></span>

Usage:<span class="anchor" id="line-273"></span><span class="anchor" id="line-274"></span><span class="anchor" id="line-275"></span>

<pre><span class="anchor" id="line-1-29"></span>rostopic pub [topic] [msg_type] [args]</pre>

<span class="anchor" id="line-276"></span>

_For ROS Hydro and later,_ example:<span class="anchor" id="line-277"></span><span class="anchor" id="line-278"></span><span class="anchor" id="line-279"></span>

<pre><span class="anchor" id="line-1-30"></span>$ rostopic pub -1 /turtle1/cmd_vel geometry_msgs/Twist -- '[2.0, 0.0, 0.0]' '[0.0, 0.0, 1.8]'</pre>

<span class="anchor" id="line-280"></span>

_For ROS Groovy and earlier,_ example:<span class="anchor" id="line-281"></span><span class="anchor" id="line-282"></span><span class="anchor" id="line-283"></span>

<pre><span class="anchor" id="line-1-31"></span>$ rostopic pub -1 /turtle1/command_velocity turtlesim/Velocity  -- 2.0  1.8</pre>

<span class="anchor" id="line-284"></span><span class="anchor" id="line-285"></span>

The previous command will send a single message to turtlesim telling it to move with an linear velocity of 2.0, and an angular velocity of 1.8 .<span class="anchor" id="line-286"></span><span class="anchor" id="line-287"></span>

*   ![turtle(rostopicpub).png](/ROS/Tutorials/UnderstandingTopics?action=AttachFile&do=get&target=turtle%28rostopicpub%29.png "turtle(rostopicpub).png")<span class="anchor" id="line-288"></span><span class="anchor" id="line-289"></span>

This is a pretty complicated example, so lets look at each argument in detail.<span class="anchor" id="line-290"></span><span class="anchor" id="line-291"></span>

_For ROS Hydro and later,_<span class="anchor" id="line-292"></span>

*   This command will publish messages to a given topic:<span class="anchor" id="line-293"></span>

    <pre><span class="anchor" id="line-1-32"></span>rostopic pub</pre>

    <span class="anchor" id="line-294"></span>
*   This option (dash-one) causes rostopic to only publish one message then exit:<span class="anchor" id="line-295"></span>

    <pre><span class="anchor" id="line-1-33"></span> -1 </pre>

    <span class="anchor" id="line-296"></span>
*   This is the name of the topic to publish to:<span class="anchor" id="line-297"></span>

    <pre><span class="anchor" id="line-1-34"></span>/turtle1/cmd_vel</pre>

    <span class="anchor" id="line-298"></span>
*   This is the message type to use when publishing the topic:<span class="anchor" id="line-299"></span>

    <pre><span class="anchor" id="line-1-35"></span>geometry_msgs/Twist</pre>

    <span class="anchor" id="line-300"></span>
*   This option (double-dash) tells the option parser that none of the following arguments is an option. This is required in cases where your arguments have a leading dash <tt class="backtick">-</tt>, like negative numbers.<span class="anchor" id="line-301"></span>

    <pre><span class="anchor" id="line-1-36"></span>--</pre>

    <span class="anchor" id="line-302"></span>
*   As noted before, a geometry_msgs/Twist msg has two vectors of three floating point elements each: <tt>linear</tt> and <tt>angular</tt>. In this case, <tt>'[2.0, 0.0, 0.0]'</tt> becomes the linear value with <tt class="backtick">x=2.0</tt>, <tt class="backtick">y=0.0</tt>, and <tt class="backtick">z=0.0</tt>, and <tt>'[0.0, 0.0, 1.8]'</tt> is the <tt>angular</tt> value with <tt class="backtick">x=0.0</tt>, <tt class="backtick">y=0.0</tt>, and <tt class="backtick">z=1.8</tt>. These arguments are actually in YAML syntax, which is described more in the [YAML command line documentation](/ROS/YAMLCommandLine).<span class="anchor" id="line-303"></span>

    <pre><span class="anchor" id="line-1-37"></span>'[2.0, 0.0, 0.0]' '[0.0, 0.0, 1.8]' </pre>

    <span class="anchor" id="line-304"></span><span class="anchor" id="line-305"></span>

_For ROS Groovy and earlier,_<span class="anchor" id="line-306"></span>

*   This command will publish messages to a given topic:<span class="anchor" id="line-307"></span>

    <pre><span class="anchor" id="line-1-38"></span>rostopic pub</pre>

    <span class="anchor" id="line-308"></span>
*   This option (dash-one) causes rostopic to only publish one message then exit:<span class="anchor" id="line-309"></span>

    <pre><span class="anchor" id="line-1-39"></span> -1 </pre>

    <span class="anchor" id="line-310"></span>
*   This is the name of the topic to publish to:<span class="anchor" id="line-311"></span>

    <pre><span class="anchor" id="line-1-40"></span>/turtle1/command_velocity</pre>

    <span class="anchor" id="line-312"></span>
*   This is the message type to use when publishing the topic:<span class="anchor" id="line-313"></span>

    <pre><span class="anchor" id="line-1-41"></span>turtlesim/Velocity</pre>

    <span class="anchor" id="line-314"></span>
*   This option (double-dash) tells the option parser that none of the following arguments is an option. This is required in cases where your arguments have a leading dash <tt class="backtick">-</tt>, like negative numbers.<span class="anchor" id="line-315"></span>

    <pre><span class="anchor" id="line-1-42"></span>--</pre>

    <span class="anchor" id="line-316"></span>
*   As noted before, a turtlesim/Velocity msg has two floating point elements : <tt>linear</tt> and <tt>angular</tt>. In this case, <tt>2.0</tt> becomes the linear value, and <tt>1.8</tt> is the <tt>angular</tt> value. These arguments are actually in YAML syntax, which is described more in the [YAML command line documentation](/ROS/YAMLCommandLine).<span class="anchor" id="line-317"></span>

    <pre><span class="anchor" id="line-1-43"></span>2.0 1.8 </pre>

    <span class="anchor" id="line-318"></span><span class="anchor" id="line-319"></span>

You may have noticed that the turtle has stopped moving; this is because the turtle requires a steady stream of commands at 1 Hz to keep moving. We can publish a steady stream of commands using <tt class="backtick">rostopic pub -r</tt> command:<span class="anchor" id="line-320"></span><span class="anchor" id="line-321"></span>

_For ROS Hydro and later,_<span class="anchor" id="line-322"></span>

*   <span class="anchor" id="line-323"></span><span class="anchor" id="line-324"></span>

    <pre><span class="anchor" id="line-1-44"></span>$ rostopic pub /turtle1/cmd_vel geometry_msgs/Twist -r 1 -- '[2.0, 0.0, 0.0]' '[0.0, 0.0, 1.8]'</pre>

    <span class="anchor" id="line-325"></span>

_For ROS Groovy and earlier,_<span class="anchor" id="line-326"></span>

*   <span class="anchor" id="line-327"></span><span class="anchor" id="line-328"></span>

    <pre><span class="anchor" id="line-1-45"></span>$ rostopic pub /turtle1/command_velocity turtlesim/Velocity -r 1 -- 2.0  -1.8</pre>

    <span class="anchor" id="line-329"></span>

This publishes the velocity commands at a rate of 1 Hz on the velocity topic.<span class="anchor" id="line-330"></span><span class="anchor" id="line-331"></span>

*   ![turtle(rostopicpub)2.png](/ROS/Tutorials/UnderstandingTopics?action=AttachFile&do=get&target=turtle%28rostopicpub%292.png "turtle(rostopicpub)2.png")<span class="anchor" id="line-332"></span><span class="anchor" id="line-333"></span>

We can also look at what is happening in <tt class="backtick">rqt_graph</tt>, The rostopic pub node (here in red) is communicating with the rostopic echo node (here in green):<span class="anchor" id="line-334"></span><span class="anchor" id="line-335"></span>

![rqt_graph_pub.png](/ROS/Tutorials/UnderstandingTopics?action=AttachFile&do=get&target=rqt_graph_pub.png "rqt_graph_pub.png")<span class="anchor" id="line-336"></span><span class="anchor" id="line-337"></span>

As you can see the turtle is running in a continuous circle. In a **new terminal**, we can use <tt class="backtick">rostopic echo</tt> to see the data published by our turtlesim:<span class="anchor" id="line-338"></span><span class="anchor" id="line-339"></span>

#### Using rostopic hz

<span class="anchor" id="line-340"></span>

<tt class="backtick">rostopic hz</tt> reports the rate at which data is published.<span class="anchor" id="line-341"></span><span class="anchor" id="line-342"></span>

Usage:<span class="anchor" id="line-343"></span><span class="anchor" id="line-344"></span><span class="anchor" id="line-345"></span>

<pre><span class="anchor" id="line-1-46"></span>rostopic hz [topic]</pre>

<span class="anchor" id="line-346"></span>

Let's see how fast the <tt class="backtick">turtlesim_node</tt> is publishing <tt class="backtick">/turtle1/pose</tt>:<span class="anchor" id="line-347"></span><span class="anchor" id="line-348"></span><span class="anchor" id="line-349"></span>

<pre><span class="anchor" id="line-1-47"></span>$ rostopic hz /turtle1/pose</pre>

<span class="anchor" id="line-350"></span>

You will see:<span class="anchor" id="line-351"></span>

*   <span class="anchor" id="line-352"></span><span class="anchor" id="line-353"></span><span class="anchor" id="line-354"></span><span class="anchor" id="line-355"></span><span class="anchor" id="line-356"></span><span class="anchor" id="line-357"></span><span class="anchor" id="line-358"></span><span class="anchor" id="line-359"></span><span class="anchor" id="line-360"></span><span class="anchor" id="line-361"></span><span class="anchor" id="line-362"></span><span class="anchor" id="line-363"></span>

    <pre><span class="anchor" id="line-1-48"></span>subscribed to [/turtle1/pose]
    <span class="anchor" id="line-2-12"></span>average rate: 59.354
    <span class="anchor" id="line-3-9"></span>        min: 0.005s max: 0.027s std dev: 0.00284s window: 58
    <span class="anchor" id="line-4-9"></span>average rate: 59.459
    <span class="anchor" id="line-5-8"></span>        min: 0.005s max: 0.027s std dev: 0.00271s window: 118
    <span class="anchor" id="line-6-8"></span>average rate: 59.539
    <span class="anchor" id="line-7-7"></span>        min: 0.004s max: 0.030s std dev: 0.00339s window: 177
    <span class="anchor" id="line-8-7"></span>average rate: 59.492
    <span class="anchor" id="line-9-6"></span>        min: 0.004s max: 0.030s std dev: 0.00380s window: 237
    <span class="anchor" id="line-10-5"></span>average rate: 59.463
    <span class="anchor" id="line-11-4"></span>        min: 0.004s max: 0.030s std dev: 0.00380s window: 290</pre>

    <span class="anchor" id="line-364"></span>

Now we can tell that the turtlesim is publishing data about our turtle at the rate of 60 Hz. We can also use <tt class="backtick">rostopic type</tt> in conjunction with <tt class="backtick">rosmsg show</tt> to get in depth information about a topic:<span class="anchor" id="line-365"></span><span class="anchor" id="line-366"></span>

_For ROS Hydro and later,_<span class="anchor" id="line-367"></span>

*   <span class="anchor" id="line-368"></span><span class="anchor" id="line-369"></span>

    <pre><span class="anchor" id="line-1-49"></span>$ rostopic type /turtle1/cmd_vel | rosmsg show</pre>

    <span class="anchor" id="line-370"></span>

_For ROS Groovy and earlier,_<span class="anchor" id="line-371"></span>

*   <span class="anchor" id="line-372"></span><span class="anchor" id="line-373"></span>

    <pre><span class="anchor" id="line-1-50"></span>$ rostopic type /turtle1/command_velocity | rosmsg show</pre>

    <span class="anchor" id="line-374"></span><span class="anchor" id="line-375"></span><span class="anchor" id="line-376"></span>

Now that we've examined the topics using <tt class="backtick">rostopic</tt> let's use another tool to look at the data published by our turtlesim:<span class="anchor" id="line-377"></span><span class="anchor" id="line-378"></span>

### Using rqt_plot

<span class="anchor" id="line-379"></span>

Note: If you're using <tt class="backtick">electric</tt> or earlier, <tt class="backtick">rqt</tt> is not available. Use [rxplot](/rxplot) instead.<span class="anchor" id="line-380"></span><span class="anchor" id="line-381"></span>

<tt class="backtick">rqt_plot</tt> displays a scrolling time plot of the data published on topics. Here we'll use <tt class="backtick">rqt_plot</tt> to plot the data being published on the <tt class="backtick">/turtle1/pose</tt> topic. First, start rqt_plot by typing<span class="anchor" id="line-382"></span><span class="anchor" id="line-383"></span>

<span class="anchor" id="line-384"></span><span class="anchor" id="line-385"></span>

<pre><span class="anchor" id="line-1-51"></span>$ rosrun rqt_plot rqt_plot</pre>

<span class="anchor" id="line-386"></span><span class="anchor" id="line-387"></span>

in a new terminal. In the new window that should pop up, a text box in the upper left corner gives you the ability to add any topic to the plot. Typing <tt class="backtick">/turtle1/pose/x</tt> will highlight the plus button, previously disabled. Press it and repeat the same procedure with the topic <tt class="backtick">/turtle1/pose/y</tt>. You will now see the turtle's x-y location plotted in the graph.<span class="anchor" id="line-388"></span><span class="anchor" id="line-389"></span>

![rqt_plot.png](/ROS/Tutorials/UnderstandingTopics?action=AttachFile&do=get&target=rqt_plot.png "rqt_plot.png")<span class="anchor" id="line-390"></span><span class="anchor" id="line-391"></span>

Pressing the minus button shows a menu that allows you to hide the specified topic from the plot. Hiding both the topics you just added and adding <tt class="backtick">/turtle1/pose/theta</tt> will result in the plot shown in the next figure.<span class="anchor" id="line-392"></span><span class="anchor" id="line-393"></span>

![rqt_plot2.png](/ROS/Tutorials/UnderstandingTopics?action=AttachFile&do=get&target=rqt_plot2.png "rqt_plot2.png")<span class="anchor" id="line-394"></span><span class="anchor" id="line-395"></span><span class="anchor" id="line-396"></span>

That's it for this section, use <tt class="backtick">Ctrl-C</tt> to kill the <tt class="backtick">rostopic</tt> terminals but keep your turtlesim running.<span class="anchor" id="line-397"></span><span class="anchor" id="line-398"></span>

Now that you understand how ROS topics work, let's look at how [services and parameters work](/ROS/Tutorials/UnderstandingServicesParams).<span class="anchor" id="line-399"></span><span class="anchor" id="line-400"></span>

## Video Tutorial

<span class="anchor" id="line-401"></span><span class="anchor" id="line-402"></span>

The following video presents a small tutorial using turtlesim on ROS nodes and ROS topics.<span class="anchor" id="line-403"></span><span class="anchor" id="line-404"></span>

<object width="480" height="295"><param name="movie" value="http://www.youtube.com/v/Yx_vGAt74sk&amp;hl=en_US&amp;fs=1&amp;hd=1"><param name="allowFullScreen" value="true"><param name="allowscriptaccess" value="always"><embed src="http://www.youtube.com/v/Yx_vGAt74sk&amp;hl=en_US&amp;fs=1&amp;hd=1" type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="true" width="480" height="295"></object><span class="anchor" id="line-405"></span><span class="anchor" id="line-406"></span>

<span class="anchor" id="line-407"></span>

<span class="anchor" id="line-408"></span>

<span class="anchor" id="line-409"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/UnderstandingTopics (last edited 2015-02-21 10:40:01 by <span title="AnisKoubaa @ 37.107.95.176[37.107.95.176]">[AnisKoubaa](/AnisKoubaa "AnisKoubaa @ 37.107.95.176[37.107.95.176]")</span>)
