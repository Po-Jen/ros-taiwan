<div id="interwiki"><span>[Wiki](/Documentation)</span></div>

*   [ROS](/ROS)
*   [Tutorials](/ROS/Tutorials)
*   [ExaminingServiceClient](/action/fullsearch/ROS/Tutorials/ExaminingServiceClient?action=fullsearch&context=180&value=linkto%3A%22ROS%2FTutorials%2FExaminingServiceClient%22 "Click to do a full-text search for this title")

<div dir="ltr" id="content" lang="en"><span class="anchor" id="top"></span><span class="anchor" id="line-1"></span><span class="anchor" id="line-2"></span><span class="anchor" id="line-3"></span><span class="anchor" id="line-4"></span><span class="anchor" id="line-5"></span><span class="anchor" id="line-6"></span><span class="anchor" id="line-7"></span><span class="anchor" id="line-8"></span><span class="anchor" id="line-9"></span><span class="anchor" id="line-10"></span><span class="anchor" id="line-11"></span><span class="anchor" id="line-12"></span><span class="anchor" id="line-13"></span><span class="anchor" id="line-14"></span><span class="anchor" id="line-15"></span><span class="anchor" id="line-16"></span><span class="anchor" id="line-17"></span><span class="anchor" id="line-18"></span><span class="anchor" id="line-19"></span>

<span class="anchor" id="line-1-1"></span><span class="anchor" id="line-2-1"></span>

<div>

<table>

<tbody>

<tr>

<td style="background-color: #cce0ff">**Note:** This tutorial assumes that you have completed the previous tutorials: writing a simple service and client [(python)](/ROS/Tutorials/WritingServiceClient%28python%29) [(c++)](/ROS/Tutorials/WritingServiceClient%28c%2B%2B%29).</td>

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

## Examining the Simple Service and Client

<span class="anchor" id="line-10-1"></span>**Description:** This tutorial examines running the simple service and client.  

<span class="anchor" id="line-11-1"></span><span class="anchor" id="line-12-1"></span><span class="anchor" id="line-13-1"></span><span class="anchor" id="line-14-1"></span>**Tutorial Level:** BEGINNER  

<span class="anchor" id="line-15-1"></span><span class="anchor" id="line-16-1"></span>**Next Tutorial:** [Recording and playing back data](/ROS/Tutorials/Recording%20and%20playing%20back%20data)  

<span class="anchor" id="line-17-1"></span>

<span class="anchor" id="line-20"></span><span class="anchor" id="line-21"></span>

<div class="table-of-contents">

Contents

1.  [Running the Service](#Running_the_Service)
2.  [Running the Client](#Running_the_Client)
3.  [Further examples on Service and Client nodes](#Further_examples_on_Service_and_Client_nodes)

</div>

<span class="anchor" id="line-22"></span><span class="anchor" id="line-23"></span>

### Running the Service

<span class="anchor" id="line-24"></span>

Let's start by running the service:<span class="anchor" id="line-25"></span><span class="anchor" id="line-26"></span><span class="anchor" id="line-27"></span><span class="anchor" id="line-28"></span>

<pre><span class="anchor" id="line-1-2"></span>$ rosrun beginner_tutorials add_two_ints_server     (C++)
<span class="anchor" id="line-2-2"></span>$ rosrun beginner_tutorials add_two_ints_server.py  (Python) </pre>

<span class="anchor" id="line-29"></span><span class="anchor" id="line-30"></span>

You should see something similar to:<span class="anchor" id="line-31"></span><span class="anchor" id="line-32"></span><span class="anchor" id="line-33"></span>

<pre><span class="anchor" id="line-1-3"></span>Ready to add two ints.</pre>

<span class="anchor" id="line-34"></span><span class="anchor" id="line-35"></span><span class="anchor" id="line-36"></span>

### Running the Client

<span class="anchor" id="line-37"></span>

Now let's run the client with the necessary arguments:<span class="anchor" id="line-38"></span><span class="anchor" id="line-39"></span><span class="anchor" id="line-40"></span><span class="anchor" id="line-41"></span>

<pre><span class="anchor" id="line-1-4"></span>$ rosrun beginner_tutorials add_two_ints_client 1 3     (C++)
<span class="anchor" id="line-2-3"></span>$ rosrun beginner_tutorials add_two_ints_client.py 1 3  (Python) </pre>

<span class="anchor" id="line-42"></span><span class="anchor" id="line-43"></span>

You should see something similar to:<span class="anchor" id="line-44"></span><span class="anchor" id="line-45"></span><span class="anchor" id="line-46"></span><span class="anchor" id="line-47"></span>

<pre><span class="anchor" id="line-1-5"></span>Requesting 1+3
<span class="anchor" id="line-2-4"></span>1 + 3 = 4</pre>

<span class="anchor" id="line-48"></span><span class="anchor" id="line-49"></span>

Now that you've successfully run your first server and client, let's learn how to [record and play back data](/ROS/Tutorials/Recording%20and%20playing%20back%20data).<span class="anchor" id="line-50"></span><span class="anchor" id="line-51"></span>

### Further examples on Service and Client nodes

<span class="anchor" id="line-52"></span>

If you want to investigate further and get a hands-on example, you can get one [here](https://github.com/fairlight1337/ros_service_examples/). A simple Client and Service combination shows the use of custom message types. The Service node is written in C++ while the Client is available in C++, Python and LISP.<span class="anchor" id="line-53"></span><span class="anchor" id="line-54"></span>

<span class="anchor" id="line-55"></span>

<span class="anchor" id="line-56"></span>

<span class="anchor" id="line-57"></span><span class="anchor" id="bottom"></span>

</div>

Wiki: ROS/Tutorials/ExaminingServiceClient (last edited 2012-08-31 11:48:11 by <span title="Jan Winkler @ tiliacordata.informatik.uni-bremen.de[134.102.206.230]">[JanWinkler](/JanWinkler "Jan Winkler @ tiliacordata.informatik.uni-bremen.de[134.102.206.230]")</span>)
