# ArchDB frontend

The Archaeological Database (ArchDB) enables archaeologists to record details from an excavation and to develop interpretations of what they have found.

The Berkshire Archæological Society, the University of Reading and the York Archaeological Trust have been using a previous version of similar software. This is likely to be deprecated by 2025.

This project is to help them explore options for developing a new product from scratch. Right now it uses sample data.

Feedback is welcome, feel free to get in contact with suggestions.

Find the backend here: https://github.com/plabram/archdb-backend

* It uses React. Vanilla JavaScript might be even easier to maintain, but it would have been more difficult to generate a quick proof of concept.
* Likewise, it uses Chakra. The additional tradeoff for fast upfront development time here is possible slow performance. However, given that all users are "internal", some lag is acceptable.
* Performance is improved as it is an SPA. React Router is used to manage routes.
* Bearer tokens are stored to local storage. This isn't the most secure approach and would need to move to a cookie as use of the service scales.
* While every effort has been taken to use systems that respond to a variety of use cases, mobile is technically not supported as of yet.
* There are 3 main objects in the data model: Sites (grandparent), Sets (parent) and Records (child). The relationship between Sets and Records is flexible and the two can exist independently, however the relationship between Sites and other entities is strongly protected. As such, it's obligatory to add a Site to other records, and deleting a Site will delete all related records. This goes for front and backend.
* The first Records are hardcoded into the app. The project didn't have huge budget for servers, so otherwise the data loads somewhat slowly. In future, these hardcoded Records can also be used to give non-authenticated users a preview of sample data without showing everything. Users can't delete or edit the sample Records (they've been checked and confirmed and it's assumed they wouldn't want to); this needs to be done manually.
