# :zap: MEVN Stack Notes

* Full stack app using MongoDB, Express, Vue and Node.js to perform Create, Read, Update and Delete (CRUD) operations on strings of data.

**Note:** to open web links in a new window use: _ctrl+click on link_

## :page_facing_up: Table of contents

* [:zap: MEVN Stack Notes](#zap-mevn-stack-notes)
	* [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
	* [:books: General info](#books-general-info)
	* [:camera: Screenshots](#camera-screenshots)
	* [:signal_strength: Technologies](#signal_strength-technologies)
	* [:floppy_disk: Setup](#floppy_disk-setup)
	* [:computer: Code Examples](#computer-code-examples)
	* [:cool: Features](#cool-features)
	* [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
	* [:clap: Inspiration](#clap-inspiration)
	* [:envelope: Contact](#envelope-contact)

## :books: General info

* Axios used to send/receive data from MongoDB backend
* Data displayed on a Vue frontend using data-binding and a v-for loop.

## :camera: Screenshots

![Example screenshot](./img/frontend.png)
![Example screenshot](./img/mongodb.png)

## :signal_strength: Technologies

**Frontend:**

* [Vue framework v2](https://vuejs.org/)
* [Vue Router v3](https://router.vuejs.org/) the official router for Vue.js
* [Vue CLI v4](https://cli.vuejs.org/)
* [Axios v0.19.2](https://github.com/axios/axios), a promise-based http client, used to consume API data.
* [Vue DevTools extension for Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)

**Backend:**

* [Express v4](https://expressjs.com/)
* [Mongoose v5](https://mongoosejs.com/)
* [cors](https://www.npmjs.com/package/cors) Cross Origin Resource Sharing Connect/Express middleware
* [Morgan](https://www.npmjs.com/package/morgan) HTTP request logger middleware for node.js

## :floppy_disk: Setup

**/ Frontend:**

* `npm run lint` to lint files
* `npm run serve` to run server. Navigate to `http://localhost:8080/`. The app will automatically reload if you change any of the source files.
* `npm run build` to create build file

**/api Backend:**

* `nodemon server.js` to run node.js server. Navigate to `http://localhost:3000/` to see JSON object with todos or an empty array. CRUD operations can be performed on this backend using the [Postman](https://www.postman.com/) API dev tool.

**/ Full stack:**

* `npm run dev` to run client and backend server concurrently. Navigate to `http://localhost:8080/` to see frontend and `http://localhost:3000/` to see backend.

## :computer: Code Examples

* POST route

```javascript
router.post("/", async (req, res) => {
  const newChecklistItem = new ChecklistItem(req.body);
  try {
    const checklistItem = await newChecklistItem.save();
    if (!checklistItem) throw new Error("Error saving checklist item");
    res.status(200).json(checklistItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
```

## :cool: Features

* Front and backends can be run with one command using concurrently set up in package.json

## :clipboard: Status & To-Do List

* Status: Working.
* To-Do: Backend: separate controllers from routes. Add date with svg on card??, replace nav with add button, show total notes.length at top, dropdown categories - add to model??

## :clap: Inspiration

* [Vue CLI Configuration Reference](https://cli.vuejs.org/config/#devserver-proxy)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)
