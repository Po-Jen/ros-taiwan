<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [MultipleMachines](/action/fullsearch/ROS/Tutorials/MultipleMachines?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FMultipleMachines%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span><span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span><span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span><span class="anchor" id="line-24"></span>

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

## Running ROS across multiple machines

<span class="anchor" id="line-9-1"></span>**Description:** This tutorial explains how to start a ROS system using two machines. It explains the use of <tt class="backtick">ROS_MASTER_URI</tt> to configure multiple machines to use a single master.  

<span class="anchor" id="line-10-1"></span><span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span>**Tutorial Level:** INTERMEDIATE   

<span class="anchor" id="line-14-1"></span><span class="anchor" id="line-15-1"></span>**Next Tutorial:** [Defining Custom Messages](/ROS/Tutorials/DefiningCustomMessages)  

<span class="anchor" id="line-16-1"></span>

<span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span>

<div class="table-of-contents">

Contents

1.  [Overview](#Overview)
2.  [Talker / listener across two machines](#Talker_.2BAC8_listener_across_two_machines)
    1.  [Start the master](#Start_the_master)
    2.  [Start the listener](#Start_the_listener)
    3.  [Start the talker](#Start_the_talker)
    4.  [Variation: connecting in the other direction](#Variation:_connecting_in_the_other_direction)
3.  [rostopic](#rostopic)
4.  [When something goes wrong](#When_something_goes_wrong)

</div>

<span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

# Overview

<span class="anchor" id="line-29"></span>

ROS is designed with distributed computing in mind. A well-written node <span class="anchor" id="line-30"></span>makes no assumptions about where in the network it runs, allowing <span class="anchor" id="line-31"></span>computation to be relocated at run-time to match the available resources <span class="anchor" id="line-32"></span>(there are exceptions; for example, a driver node that communicate with a <span class="anchor" id="line-33"></span>piece of hardware must run on the machine to which the hardware is <span class="anchor" id="line-34"></span>physically connected). <span class="anchor" id="line-35"></span>Deploying a ROS system across multiple machines is easy. Keep the following things in mind:<span class="anchor" id="line-36"></span>

*   You only need one master. Select one machine to run it on.<span class="anchor" id="line-37"></span>
*   All nodes must be configured to use the same master, via <tt class="backtick">ROS_MASTER_URI</tt>.<span class="anchor" id="line-38"></span>

*   There must be complete, bi-directional connectivity between all pairs of machines, on all ports (see [ROS/NetworkSetup](/ROS/NetworkSetup)).<span class="anchor" id="line-39"></span>

*   Each machine must advertise itself by a name that all other machines can resolve (see [ROS/NetworkSetup](/ROS/NetworkSetup)).<span class="anchor" id="line-40"></span><span class="anchor" id="line-41"></span>

# Talker / listener across two machines

<span class="anchor" id="line-42"></span>

Say we want to run a talker / listener system across two machines, named <span class="anchor" id="line-43"></span>**marvin** and **hal**. These are the machines' hostnames, which means <span class="anchor" id="line-44"></span>that these are the names by which you would address them when. E.g., to <span class="anchor" id="line-45"></span>login to **marvin**, you would do:<span class="anchor" id="line-46"></span><span class="anchor" id="line-47"></span><span class="anchor" id="line-48"></span>

<pre><span class="anchor" id="line-1-2"></span>ssh marvin</pre>

<span class="anchor" id="line-49"></span>

Same goes for **hal**.<span class="anchor" id="line-50"></span><span class="anchor" id="line-51"></span>

## Start the master

<span class="anchor" id="line-52"></span>

We need to select one machine to run the master; we'll go with **hal**. <span class="anchor" id="line-53"></span>The first step is start the master:<span class="anchor" id="line-54"></span><span class="anchor" id="line-55"></span><span class="anchor" id="line-56"></span><span class="anchor" id="line-57"></span>

<pre><span class="anchor" id="line-1-3"></span>ssh hal
<span class="anchor" id="line-2-2"></span>roscore</pre>

<span class="anchor" id="line-58"></span><span class="anchor" id="line-59"></span>

## Start the listener

<span class="anchor" id="line-60"></span>

Now we'll start a listener on **hal**, configuring <tt class="backtick">ROS_MASTER_URI</tt> so <span class="anchor" id="line-61"></span>that we use the master that was just started:<span class="anchor" id="line-62"></span><span class="anchor" id="line-63"></span><span class="anchor" id="line-64"></span><span class="anchor" id="line-65"></span><span class="anchor" id="line-66"></span>

<pre><span class="anchor" id="line-1-4"></span>ssh hal
<span class="anchor" id="line-2-3"></span>export ROS_MASTER_URI=http://hal:11311
<span class="anchor" id="line-3-2"></span>rosrun rospy_tutorials listener.py</pre>

<span class="anchor" id="line-67"></span><span class="anchor" id="line-68"></span>

## Start the talker

<span class="anchor" id="line-69"></span>

Next we'll start a talker on **marvin**, also configuring <tt class="backtick">ROS_MASTER_URI</tt> <span class="anchor" id="line-70"></span>so that the master on **hal** is used:<span class="anchor" id="line-71"></span><span class="anchor" id="line-72"></span><span class="anchor" id="line-73"></span><span class="anchor" id="line-74"></span><span class="anchor" id="line-75"></span>

<pre><span class="anchor" id="line-1-5"></span>ssh marvin
<span class="anchor" id="line-2-4"></span>export ROS_MASTER_URI=http://hal:11311
<span class="anchor" id="line-3-3"></span>rosrun rospy_tutorials talker.py</pre>

<span class="anchor" id="line-76"></span>

Voila: you should now see the listener on **hal** receiving messages from <span class="anchor" id="line-77"></span>the talker on **marvin**.<span class="anchor" id="line-78"></span><span class="anchor" id="line-79"></span>

Note that the sequence of talker / listener startup doesn't matter; the <span class="anchor" id="line-80"></span>nodes can be started in any order. The only requirement is that you start <span class="anchor" id="line-81"></span>the master before starting any nodes.<span class="anchor" id="line-82"></span><span class="anchor" id="line-83"></span>

## Variation: connecting in the other direction

<span class="anchor" id="line-84"></span>

Now let's try it in the other direction. Leaving the master running on <span class="anchor" id="line-85"></span>**hal**, kill the talker and listener, then bring them up on opposite <span class="anchor" id="line-86"></span>machines.<span class="anchor" id="line-87"></span><span class="anchor" id="line-88"></span>

First a listener on **marvin**:<span class="anchor" id="line-89"></span><span class="anchor" id="line-90"></span><span class="anchor" id="line-91"></span><span class="anchor" id="line-92"></span><span class="anchor" id="line-93"></span>

<pre><span class="anchor" id="line-1-6"></span>ssh marvin
<span class="anchor" id="line-2-5"></span>export ROS_MASTER_URI=http://hal:11311
<span class="anchor" id="line-3-4"></span>rosrun rospy_tutorials listener.py</pre>

<span class="anchor" id="line-94"></span>

Now a talker on **hal**:<span class="anchor" id="line-95"></span><span class="anchor" id="line-96"></span><span class="anchor" id="line-97"></span><span class="anchor" id="line-98"></span><span class="anchor" id="line-99"></span>

<pre><span class="anchor" id="line-1-7"></span>ssh hal
<span class="anchor" id="line-2-6"></span>export ROS_MASTER_URI=http://hal:11311
<span class="anchor" id="line-3-5"></span>rosrun rospy_tutorials talker.py</pre>

<span class="anchor" id="line-100"></span><span class="anchor" id="line-101"></span>

# rostopic

<span class="anchor" id="line-102"></span>

For testing you can use the [rostopic](/rostopic) tool on all machines which are connected to the core.<span class="anchor" id="line-103"></span><span class="anchor" id="line-104"></span>

You get a list of all available topics. If you are not connected to a core there is an error.<span class="anchor" id="line-105"></span><span class="anchor" id="line-106"></span><span class="anchor" id="line-107"></span>

<pre><span class="anchor" id="line-1-8"></span>rostopic list</pre>

<span class="anchor" id="line-108"></span><span class="anchor" id="line-109"></span>

In wireless networks it is sometimes necessary to check if there is a connection and messages still come. For short tests it is handy to print out the messages.<span class="anchor" id="line-110"></span><span class="anchor" id="line-111"></span><span class="anchor" id="line-112"></span>

<pre><span class="anchor" id="line-1-9"></span>rostopic echo /topic_name</pre>

<span class="anchor" id="line-113"></span><span class="anchor" id="line-114"></span><span class="anchor" id="line-115"></span>

# When something goes wrong

<span class="anchor" id="line-116"></span>

If something in the above sequence didn't work, the cause is likely in your <span class="anchor" id="line-117"></span>network configuration. See [ROS/NetworkSetup](/ROS/NetworkSetup) for configuration <span class="anchor" id="line-118"></span>requirements and troubleshooting tips.<span class="anchor" id="line-119"></span><span class="anchor" id="line-120"></span>

<span class="anchor" id="line-121"></span>

<span class="anchor" id="line-122"></span>

<span class="anchor" id="line-123"></span>

<span class="anchor" id="line-124"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/MultipleMachines (last edited 2015-04-07 09:46:19 by <span title="Georg Leugner @ aftr-88-217-180-237.dynamic.mnet-online.de[88.217.180.237]">[Georg Leugner](/Georg%20Leugner "Georg Leugner @ aftr-88-217-180-237.dynamic.mnet-online.de[88.217.180.237]")</span>)
