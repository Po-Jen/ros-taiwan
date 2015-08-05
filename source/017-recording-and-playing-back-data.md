<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [Recording and playing back data](/action/fullsearch/ROS/Tutorials/Recording%20and%20playing%20back%20data?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FRecording+and+playing+back+data%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span><span class="anchor" id="line-3-1"></span><span class="anchor" id="line-4-1"></span><span class="anchor" id="line-5-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #bbceee">![(!)](/moin_static197/rostheme/img/idea.png "(!)")It is appreciated that problems/questions regarding this tutorial are asked on [answers.ros.org](http://answers.ros.org). Don't forget to include in your question the link to this page, versions of your OS & ROS, and also add appropriate tags.</td>

</tr>

</tbody>

</table>

</div>

<span class="anchor" id="line-6-1"></span><span class="anchor" id="line-7-1"></span><span class="anchor" id="line-8-1"></span>

## Recording and playing back data

<span class="anchor" id="line-9-1"></span>**Description:** This tutorial will teach you how to record data from a running ROS system into a .bag file, and then to play back the data to produce similar behavior in a running system.  

<span class="anchor" id="line-10-1"></span><span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span>**Keywords:** data, rosbag, record, play, info, bag  

<span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span><span class="anchor" id="line-15-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-16-1"></span><span class="anchor" id="line-17-1"></span>**Next Tutorial:** [Getting started with roswtf](/ROS/Tutorials/Getting%20started%20with%20roswtf)  

<span class="anchor" id="line-18-1"></span>

<span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span>

<div class="table-of-contents">

Contents

1.  [Recording data (creating a bag file)](#rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.Recording_data_.28creating_a_bag_file.29)
    1.  [Recording all published topics](#rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.Recording_all_published_topics)
2.  [Examining and playing the bag file](#rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.Examining_and_playing_the_bag_file)
3.  [Recording a subset of the data](#rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.Recording_a_subset_of_the_data)
4.  [The limitations of rosbag record/play](#rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.The_limitations_of_rosbag_record.2BAC8-play)

</div>

<div dir="ltr" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.content" lang="en"><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.top"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-2"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-3"></span>

### Recording data (creating a bag file)

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-4"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-5"></span>

This section of the tutorial will instruct you how to record topic data from a running ROS system. The topic data will be accumulated in a bag file.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-6"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-7"></span>

First, execute the following two commands:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-8"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-9"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-10"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-11"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-12"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-13"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-1"></span>roscore
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-2-1"></span>rosrun turtlesim turtlesim_node 
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-3-1"></span>rosrun turtlesim turtle_teleop_key</pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-14"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-15"></span>

This will start two nodes - the turtlesim visualizer and a node that allows for the keyboard control of turtlesim using the arrows keys on the keyboard. If you select the terminal window from which you launched turtle_keyboard, you should see something like the following:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-16"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-17"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-18"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-19"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-20"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-21"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-2"></span>Reading from keyboard
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-2-2"></span>---------------------------
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-3-2"></span>Use arrow keys to move the turtle.</pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-22"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-23"></span>

Pressing the arrow keys on the keyboard should cause the turtle to move around the screen. Note that to move the turtle you must have the terminal from which you launched turtlesim selected and not the turtlesim window.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-24"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-25"></span>

#### Recording all published topics

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-26"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-27"></span>

First lets examine the full list of topics that are currently being published in the running system. To do this, open a new terminal and execute the command:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-28"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-29"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-30"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-31"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-3"></span>rostopic list -v</pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-32"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-33"></span>

This should yield the following output:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-34"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-35"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-36"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-37"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-38"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-39"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-40"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-41"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-42"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-43"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-44"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-45"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-46"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-4"></span>Published topics:
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-2-3"></span> * /turtle1/color_sensor [turtlesim/Color] 1 publisher
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-3-3"></span> * /turtle1/cmd_vel [geometry_msgs/Twist] 1 publisher
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-4-1"></span> * /rosout [rosgraph_msgs/Log] 2 publishers
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-5-1"></span> * /rosout_agg [rosgraph_msgs/Log] 1 publisher
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-6-1"></span> * /turtle1/pose [turtlesim/Pose] 1 publisher
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-7-1"></span>
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-8-1"></span>Subscribed topics:
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-9-1"></span> * /turtle1/cmd_vel [geometry_msgs/Twist] 1 subscriber
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-10-1"></span> * /rosout [rosgraph_msgs/Log] 1 subscriber</pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-47"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-48"></span>

The list of published topics are the only message types that could potentially be recorded in the data log file, as only published messages are recorded. The topic /turtle1/cmd_vel is the command message published by teleop_turtle that is taken as input by the turtlesim process. The messages /turtle1/color_sensor and /turtle1/pose are output messages published by turtlesim.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-49"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-50"></span>

We now will record the published data. Open a new terminal window. In this window run the following commands:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-51"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-52"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-53"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-54"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-55"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-56"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-5"></span>mkdir ~/bagfiles
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-2-4"></span>cd ~/bagfiles
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-3-4"></span>rosbag record -a</pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-57"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-58"></span>

Here we are just making a temporary directory to record data and then running **rosbag record** with the option -a, indicating that all published topics should be accumulated in a bag file.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-59"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-60"></span>

Move back to the terminal window with turtle_teleop and move the turtle around for 10 or so seconds.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-61"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-62"></span>

In the window running rosbag record exit with a Ctrl-C. Now examine the contents of the directory ~/bagfiles. You should see a file with a name that begins with the year, data, and time and the suffix .bag. This is the bag file that contains all topics published by any node in the time that **rosbag record** was running.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-63"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-64"></span>

### Examining and playing the bag file

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-65"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-66"></span>

Now that we've recorded a bag file using **rosbag record** we can examine it and play it back using the commands **rosbag info** and **rosbag play**. First we are going to see what's recorded in the bag file. We can do the **info** command -- this command checks the contents of the bag file without playing it back. Execute the following command from the bagfiles directory:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-67"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-68"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-69"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-6"></span>rosbag info <your bagfile></pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-70"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-71"></span>

You should see something like:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-72"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-73"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-74"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-75"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-76"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-77"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-78"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-79"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-80"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-81"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-82"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-83"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-84"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-85"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-86"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-87"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-88"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-89"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-90"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-91"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-7"></span>path:        2014-12-10-20-08-34.bag
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-2-5"></span>version:     2.0
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-3-5"></span>duration:    1:38s (98s)
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-4-2"></span>start:       Dec 10 2014 20:08:35.83 (1418270915.83)
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-5-2"></span>end:         Dec 10 2014 20:10:14.38 (1418271014.38)
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-6-2"></span>size:        865.0 KB
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-7-2"></span>messages:    12471
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-8-2"></span>compression: none [1/1 chunks]
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-9-2"></span>types:       geometry_msgs/Twist [9f195f881246fdfa2798d1d3eebca84a]
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-10-2"></span>             rosgraph_msgs/Log   [acffd30cd6b6de30f120938c17c593fb]
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-11-1"></span>             turtlesim/Color     [353891e354491c51aabe32df673fb446]
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-12-1"></span>             turtlesim/Pose      [863b248d5016ca62ea2e895ae5265cf9]
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-13-1"></span>topics:      /rosout                    4 msgs    : rosgraph_msgs/Log   (2 connections)
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-14-1"></span>             /turtle1/cmd_vel         169 msgs    : geometry_msgs/Twist
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-15-1"></span>             /turtle1/color_sensor   6149 msgs    : turtlesim/Color    
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-16-1"></span>             /turtle1/pose           6149 msgs    : turtlesim/Pose</pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-92"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-93"></span>

This tells us topic names and types as well as the number (count) of each message topic contained in the bag file. We can see that of the topics being advertised that we saw in the **rostopic** output, four of the five were actually published over our recording interval. As we ran **rosbag record** with the -a flag it recorded all messages published by all nodes.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-94"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-95"></span>

The next step in this tutorial is to replay the bag file to reproduce behavior in the running system. First kill the teleop program that may be still running from the previous section - a Ctrl-C in the terminal where you started turtle_teleop_key. Leave turtlesim running. In a terminal window run the following command in the directory where you took the original bag file:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-96"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-97"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-98"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-99"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-8"></span>rosbag play <your bagfile></pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-100"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-101"></span>

In this window you should immediately see something like:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-102"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-103"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-104"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-105"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-106"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-107"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-108"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-109"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-9"></span>[ INFO] [1418271315.162885976]: Opening 2014-12-10-20-08-34.bag
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-2-6"></span>
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-3-6"></span>Waiting 0.2 seconds after advertising topics... done.
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-4-3"></span>
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-5-3"></span>Hit space to toggle paused, or 's' to step.</pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-110"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-111"></span>

In its default mode rosbag play will wait for a certain period (.2 seconds) after advertising each message before it actually begins publishing the contents of the bag file. Waiting for some duration allows any subscriber of a message to be alerted that the message has been advertised and that messages may follow. If **rosbag play** publishes messages immediately upon advertising, subscribers may not receive the first several published messages. The waiting period can be specified with the -d option.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-112"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-113"></span>

Eventually the topic /turtle1/cmd_vel will be published and the turtle should start moving in turtlesim in a pattern similar to the one you executed from the teleop program. The duration between running **rosbag play** and the turtle moving should be approximately equal to the time between the original **rosbag record** execution and issuing the commands from the keyboard in the beginning part of the tutorial. You can have **rosbag play** not start at the beginning of the bag file but instead start some duration past the beginning using the -s argument. A final option that may be of interest is the -r option, which allows you to change the rate of publishing by a specified factor. If you execute:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-114"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-115"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-116"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-117"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-10"></span>rosbag play -r 2 <your bagfile></pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-118"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-119"></span>

You should see the turtle execute a slightly different trajectory - this is the trajectory that would have resulted had you issued your keyboard commands twice as fast.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-120"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-121"></span>

### Recording a subset of the data

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-122"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-123"></span>

When running a complicated system, such as the pr2 software suite, there may be hundreds of topics being published, with some topics, like camera image streams, potentially publishing huge amounts of data. In such a system it is often impractical to write log files consisting of all topics to disk in a single bag file. The **rosbag record** command supports logging only particular topics to a bag file, allowing a user to only record the topics of interest to them.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-124"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-125"></span>

If any turtlesim nodes are running exit them and relaunch the keyboard teleop launch file:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-126"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-127"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-128"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-129"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-130"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-11"></span>rosrun turtlesim turtlesim_node 
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-2-7"></span>rosrun turtlesim turtle_teleop_key</pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-131"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-132"></span>

In your bagfiles directory, run the following command:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-133"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-134"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-135"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-136"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-12"></span>rosbag record -O subset /turtle1/cmd_vel /turtle1/pose</pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-137"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-138"></span>

The -O argument tells **rosbag record** to log to a file named subset.bag, and the topic arguments cause **rosbag record** to only subscribe to these two topics. Move the turtle around for several seconds using the keyboard arrow commands, and then Ctrl-C the **rosbag record**.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-139"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-140"></span>

Now check the contents of the bag file (**rosbag info subset.bag**). You should see something like this, with only the indicated topics:<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-141"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-142"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-143"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-144"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-145"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-146"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-147"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-148"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-149"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-150"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-151"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-152"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-153"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-154"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-155"></span>

<pre><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-1-13"></span>path:        subset.bag
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-2-8"></span>version:     2.0
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-3-7"></span>duration:    12.6s
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-4-4"></span>start:       Dec 10 2014 20:20:49.45 (1418271649.45)
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-5-4"></span>end:         Dec 10 2014 20:21:02.07 (1418271662.07)
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-6-3"></span>size:        68.3 KB
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-7-3"></span>messages:    813
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-8-3"></span>compression: none [1/1 chunks]
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-9-3"></span>types:       geometry_msgs/Twist [9f195f881246fdfa2798d1d3eebca84a]
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-10-3"></span>             turtlesim/Pose      [863b248d5016ca62ea2e895ae5265cf9]
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-11-2"></span>topics:      /turtle1/cmd_vel    23 msgs    : geometry_msgs/Twist
<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-12-2"></span>             /turtle1/pose      790 msgs    : turtlesim/Pose</pre>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-156"></span>

### The limitations of rosbag record/play

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-157"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-158"></span>

In the previous section you may have noted that the turtle's path may not have exactly mapped to the original keyboard input - the rough shape should have been the same, but the turtle may not have exactly tracked the same path. The reason for this is that the path tracked by turtlesim is very sensitive to small changes in timing in the system, and rosbag is limited in its ability to exactly duplicate the behavior of a running system in terms of when messages are recorded and processed by rosrecord, and when messages are produced and processed when using rosplay. For nodes like turtlesim, where minor timing changes in when command messages are processed can subtly alter behavior, the user should not expect perfectly mimicked behavior.<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-159"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-160"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-161"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-162"></span>

<span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.line-163"></span><span class="anchor" id="rosbag.2BAC8-Tutorials.2BAC8-Recording_and_playing_back_data.bottom"></span>

</div>

<span class="anchor" id="line-23"></span><span class="anchor" id="line-24"></span>

Now that you've learned how to record and play back data, let's learn how to [troubleshoot with roswtf](/ROS/Tutorials/Getting%20started%20with%20roswtf).<span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span>

<span class="anchor" id="line-27"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/Recording and playing back data (last edited 2015-05-28 01:04:03 by <span title="MuhammedHussain @ static-28-34-9-213.b2bdsl.de[213.9.34.28]">[MuhammedHussain](/MuhammedHussain "MuhammedHussain @ static-28-34-9-213.b2bdsl.de[213.9.34.28]")</span>)
