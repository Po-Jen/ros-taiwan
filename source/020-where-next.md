<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [WhereNext](/action/fullsearch/ROS/Tutorials/WhereNext?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FWhereNext%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: [Navigating the Wiki](/ROS/Tutorials/NavigatingTheWiki).</td>

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

## Where Next?

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial discusses options for getting to know more about using ROS on real or simulated robots.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span><span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-24"></span><span class="anchor" id="line-25"></span>

<div class="table-of-contents">

Contents

1.  [Launching a Simulator](#Launching_a_Simulator)
2.  [Exploring RViz](#Exploring_RViz)
3.  [Understanding TF](#Understanding_TF)
4.  [Going Deeper](#Going_Deeper)

</div>

<span class="anchor" id="line-26"></span><span class="anchor" id="line-27"></span>

At this point in the beginner's tutorials you should have an understanding of the core concepts of ROS.<span class="anchor" id="line-28"></span><span class="anchor" id="line-29"></span>

Given a robot that runs ROS, you could use this understanding to list topics published and subscribed by the robot, to identify the messages consumed by these topics and then write your own nodes that process sensor data and act in the world.<span class="anchor" id="line-30"></span><span class="anchor" id="line-31"></span>

The real attraction of ROS is not the publish/subscribe middle-ware itself but that ROS provides a standard mechanism for developers around the world to share their code. The best "feature" of ROS is its enormous community.<span class="anchor" id="line-32"></span><span class="anchor" id="line-33"></span>

The number of packages available can be overwhelming. This tutorial attempts to give you an idea of what to explore next.<span class="anchor" id="line-34"></span><span class="anchor" id="line-35"></span>

### Launching a Simulator

<span class="anchor" id="line-36"></span>

Even if you have a real robot, it is good to get started using a simulator so that if something goes wrong you don't injure yourself or damage an expensive robot.<span class="anchor" id="line-37"></span><span class="anchor" id="line-38"></span>

You can get started with the [PR2 Simulator](/pr2_simulator/Tutorials) or the [Turtlebot Simulator](/turtlebot_simulator/Tutorials). Alternately, you might [search for your robot](/Robots) and check whether it has a simulator of its own.<span class="anchor" id="line-39"></span><span class="anchor" id="line-40"></span>

At this point, you might try to control the simulated robot using a 'teleop' package (e.g., [turtlebot_teleop](/turtlebot_teleop/Tutorials/Teleoperation)) or use your understanding of ROS to find a topic and write code that sends an appropriate message to drive your robot.<span class="anchor" id="line-41"></span><span class="anchor" id="line-42"></span>

### Exploring RViz

<span class="anchor" id="line-43"></span>

[RViz](/rviz) is a powerful visualization tool that allows you to view the robot's sensors and internal state. The [user guide](/rviz/UserGuide) will help you get started.<span class="anchor" id="line-44"></span><span class="anchor" id="line-45"></span>

### Understanding TF

<span class="anchor" id="line-46"></span>

The [TF](/tf) package transforms between different coordinate frames used by your robot and keeps track of these transforms over time. A good understanding of TF is essential when working with any real robot. It is worthwhile to work through the tutorials.<span class="anchor" id="line-47"></span><span class="anchor" id="line-48"></span>

If you're building your own robot, you might at this point consider constructing a [URDF model](/urdf/Tutorials) for your robot. If you're using a "standard" robot then one has probably already being built for you. Nevertheless, it may be worthwhile to briefly familiarize yourself with the [URDF](/urdf) package.<span class="anchor" id="line-49"></span><span class="anchor" id="line-50"></span>

### Going Deeper

<span class="anchor" id="line-51"></span>

At this point, you're probably ready to start getting your robot to perform more sophisticated tasks. The following pages may help you:<span class="anchor" id="line-52"></span><span class="anchor" id="line-53"></span>

1.  [actionlib](/actionlib) - The actionlib package provides a standardized interface for interfacing with preemptible tasks. This is widely used by "higher-level" packages in ROS.<span class="anchor" id="line-54"></span><span class="anchor" id="line-55"></span>

2.  [navigation](/navigation) - 2D navigation: map-building and path planning.<span class="anchor" id="line-56"></span><span class="anchor" id="line-57"></span>

3.  [MoveIt](http://moveit.ros.org/) - To control the arms of your robot.<span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span>

<span class="anchor" id="line-60"></span>

<span class="anchor" id="line-61"></span>

<span class="anchor" id="line-62"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/WhereNext (last edited 2014-02-10 10:27:41 by <span title="ThomasSolatges @ 134.157.18.251[134.157.18.251]">[ThomasSolatges](/ThomasSolatges "ThomasSolatges @ 134.157.18.251[134.157.18.251]")</span>)
