import { getDocs, collection } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { db } from "/init-firebase.js"

var tbody = document.getElementById('tableBody');

const querySnapshot = await getDocs(collection(db, "theses"));
querySnapshot.forEach((doc) => {
    var row = document.createElement('tr');
    var data = doc.data();
    //var keys = Object.keys(data);

    var name = document.createElement('td');
    name.textContent = data['name'];
    row.appendChild(name);
    var year = document.createElement('td');
    year.textContent = data['year'];
    row.appendChild(year)
    tbody.appendChild(row);
})