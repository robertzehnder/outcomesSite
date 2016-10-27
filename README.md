# outcomesSite

Database structure:

(1) People
  >> Has two sub tables of student and team. These represent: the students (duh) and the leads of the outcomes team who will support the students. Will be implemented in phase one.

  >> Focusing on creating and deleting profiles, as well as signing in

  (a) Team

  (b) Students

(2) Homework
  >> Will contain all of the homework the students will have to complete. This is not a priority for phase one. Should this extend cohort?

(3) Roadmap
  >> Will display the students' schedule as they go through the course. Will be implemented in phase one

(4) Cohort
  >> Will contain the information for the cohort regarding the type and the number. Other classes will be inheriting this to identify which class a student should be in and the type of homework that should be displayed to them.

----------Backlog-----------

---Initial start feature---

1. As a student, I want the ability to create a profile, so that I can interact with the outcomes site

2. As an outcomes team member, I want the ability to create a profile, so that I can interact with the outcomes site

3. As a student, I would like the ability to view the roadmap in a single pane of glass, so that I can conveniently view what work I have to do

4. As a person interacting with the system, I would like to view the whole cohort in a single view, so that I can view others in the cohort and navigate to their profiles

---News Feed Feature---

As a person on this site, I would like to have a message (news feed) system on a student's profile, so that notes can be taken and scheduling alerts can be displayed. Also past homework completion, and notice of homework feedback

1. As a person on this site, I would like to have a messaging system on a student's profile, so that notes can be taken and feedback can be given
AC:
  >>Timestamped messages with date
  >>Display user who created the message

2. As a person on this site, I would like to view homework completion notifications on my news feed when an assignment is completed, so that I can monitor progress

3. As a student on this site, I would like to integrate meetup events that I am attending onto the news feed to display upcoming events and events that I attended
  >>Stretch goal to add people that you met, but maybe just display a message reminder

4. As a student or outcomes team member, I would like suggestions to show up in my news feed to give suggestions about what I should log in my news feed

5. As a person using the site, I would like email notifications whenever a new message is posted in a feed related to me, so that I can have a timely conversation with the other person
