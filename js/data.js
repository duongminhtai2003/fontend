const myData = [{
        id: "1",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 20000,
        transaction_fee: 20,
        note: "",
        time: "2020-05-04 11:29"
    },
    {
        id: "2",
        status: "Confirmed",
        from: "0xb6e687887e7af54dca5810baa6b2ec8d45ddaa36",
        to: "0x3a346598f382a11889ba3df2f3340104a5982008",
        amount: 2500000,
        transaction_fee: 50,
        note: "",
        time: "2020-06-04 20:04"
    },
    {
        id: "3",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        amount: 4000,
        transaction_fee: 30,
        note: "",
        time: "2020-07-04 13:20"
    },
    {
        id: "4",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        amount: 15000,
        transaction_fee: 20,
        note: "",
        time: "2020-05-05 13:05"
    },
    {
        id: "10",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 100000,
        transaction_fee: 30,
        note: "",
        time: "2020-06-07 10:57"
    },
    {
        id: "11",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 10000,
        transaction_fee: 10,
        note: "",
        time: "2020-07-07 10:48"
    },
    {
        id: "5",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x99181faf837cce92ebed158f012bbda204719ad7",
        amount: 20000,
        transaction_fee: 20,
        note: "",
        time: "2020-08-05 12:56"
    },
    {
        id: "6",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 100000,
        transaction_fee: 30,
        note: "",
        time: "2020-05-05 11:30"
    },
    {
        id: "12",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x2f6f29b89e833b68e5172ef856303df442415c61",
        amount: 31000,
        transaction_fee: 20,
        note: "",
        time: "2020-06-07 17:36"
    },
    {
        id: "13",
        status: "Confirmed",
        from: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        to: "0x8ac7bdb1cf548773cfaa175928366fda03e4e6fd",
        amount: 1000,
        transaction_fee: 10,
        note: "",
        time: "2020-07-08 12:17"
    },
    {
        id: "7",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 50000,
        transaction_fee: 30,
        note: "",
        time: "2020-08-06 11:23"
    },
    {
        id: "8",
        status: "Confirmed",
        from: "0x687422eea2cb73b5d3e242ba5456b782919afc85",
        to: "0x3a346598f382a11889ba3df2f3340104a5982008",
        amount: 100000,
        transaction_fee: 30,
        note: "",
        time: "2020-05-06 11:14"
    },
    {
        id: "9",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x869770983877329f337b19dbc319959e51afec1a",
        amount: 100000,
        transaction_fee: 20,
        note: "",
        time: "2020-06-06 11:06"
    },
    {
        id: "14",
        status: "Confirmed",
        from: "0x3a346598f382a11889ba3df2f3340104a5982008",
        to: "0x50b3e3dd6abe7b6b7e4faf4fbedc790f075df18f",
        amount: 135000,
        transaction_fee: 30,
        note: "",
        time: "2020-08-08 11:15"
    }
];

myData.sort(function(a, b) {
    return new Date(a.time) - new Date(b.time);
});

const formatCurrency = number => {
    const format = number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    return `¥ ${format}`;
}

const groupTime = (myData) => {
    groupKey = 0;
    groups = myData.reduce(function(r, o) {
        var m = o.time.substring(0, 7);
        (r[m]) ? r[m].data.push(o): r[m] = { group: String(groupKey++), data: [o] };
        return r;
    }, {});
    var result = Object.keys(groups).map(function(k) { return groups[k]; });
    console.log(result);
    return result;

}

const renderTable = myData => {
    const tBody = document.getElementsByTagName('tbody')[0];
    for (i = 0; i < myData.length; i++) {
        for (j = 0; j < myData[i].data.length; j++) {
            if (j === 0) {
                let row = `<tr>
                <td rowspan="${myData[i].data.length}">${myData[i].data[j].time.substring(0, 7)}</td>
                <td>${myData[i].data[j].time}</td> 
                <td>${formatCurrency(myData[i].data[j].amount)}</td> 
                </tr>`;
                tBody.innerHTML += row;
            } else {
                let row = `<tr>
                <td>${myData[i].data[j].time}</td> 
                <td>${formatCurrency(myData[i].data[j].amount)}</td> 
                </tr>`;
                tBody.innerHTML += row;
            }
        }

    }
}

renderTable(groupTime(myData));