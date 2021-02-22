import React, {Component} from 'react';


class TablePage extends Component {
    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
        this.state = {
            cols: [],
            showItem: true,
            editActivated: false,
            limitOptions: [{i: 2}, {i: 10}, {i: 16}, {i: 24}, {i: 32}, {i: 64}, {i: 128}],
            limit: 0,
            entryValue: null,
            elementId: null,
            keyValue: null,
            data: [
                {
                    id: 0,
                    item: 'Gross Revenue',
                    year: 2020,
                    last_12_months: 139818363,
                    january: 10721271,
                    february: 10882090,
                    march: 11045322,
                    april: 11211001,
                    may: 11379166,
                    jun: 11549854,
                    july: 11723102,
                    august: 11898948,
                    september: 12077432,
                    october: 12258594,
                    november: 12442473,
                    december: 12629110
                },
                {
                    id: 1,
                    item: 'Gross Revenue',
                    year: 2020,
                    last_12_months: 139818363,
                    january: 10721271,
                    february: 10882090,
                    march: 11045322,
                    april: 11211001,
                    may: 11379166,
                    jun: 11549854,
                    july: 11723102,
                    august: 11898948,
                    september: 12077432,
                    october: 12258594,
                    november: 12442473,
                    december: 12629110
                },
                {
                    id: 2,
                    item: 'Gross to Net',
                    year: 2020,
                    last_12_months: 8389101,
                    january: 643276,
                    february: 652925,
                    march: 662719,
                    april: 672660,
                    may: 682750,
                    jun: 692991,
                    july: 703386,
                    august: 713937,
                    september: 724646,
                    october: 735516,
                    november: 746548,
                    december: 757747
                },
                {
                    id: 3,
                    item: 'Net Revenue',
                    year: 2020,
                    last_12_months: 131429260,
                    january: 10077995,
                    february: 10229165,
                    march: 10382602,
                    april: 10538341,
                    may: 10696416,
                    jun: 10856863,
                    july: 11019716,
                    august: 11185011,
                    september: 11352786,
                    october: 11523078,
                    november: 11695924,
                    december: 11871363
                },
                {
                    id: 4,
                    item: 'Material CoGS',
                    year: 2020,
                    last_12_months: 43588376,
                    january: 3342356,
                    february: 3392492,
                    march: 3443379,
                    april: 3495030,
                    may: 3547455,
                    jun: 3600667,
                    july: 3654677,
                    august: 3709497,
                    september: 3765140,
                    october: 3821617,
                    november: 3878941,
                    december: 3937125
                },
                {
                    id: 5,
                    item: 'Labor CoGS',
                    year: 2020,
                    last_12_months: 14680928,
                    january: 1125733,
                    february: 1142619,
                    march: 1159759,
                    april: 1177155,
                    may: 1194812,
                    jun: 1212735,
                    july: 1230926,
                    august: 1249390,
                    september: 1268130,
                    october: 1287152,
                    november: 1306460,
                    december: 1326057
                },
                {
                    id: 6,
                    item: 'Burden CoGS Allocation',
                    year: 2020,
                    last_12_months: 22021393,
                    january: 1688600,
                    february: 1713929,
                    march: 1739638,
                    april: 1765733,
                    may: 1792219,
                    jun: 1819102,
                    july: 1846389,
                    august: 1874084,
                    september: 1902196,
                    october: 1930729,
                    november: 1959689,
                    december: 1989085
                },
                {
                    id: 7,
                    item: 'Depreciation CoGS',
                    year: 2020,
                    last_12_months: 13981835,
                    january: 1072127,
                    february: 1088209,
                    march: 1104532,
                    april: 1121100,
                    may: 1137917,
                    jun: 1154985,
                    july: 1172310,
                    august: 1189895,
                    september: 1207743,
                    october: 1225859,
                    november: 1244247,
                    december: 1262911
                },
                {
                    id: 8,
                    item: 'Depreciation CoGS',
                    year: 2020,
                    last_12_months: 13981835,
                    january: 1072127,
                    february: 1088209,
                    march: 1104532,
                    april: 1121100,
                    may: 1137917,
                    jun: 1154985,
                    july: 1172310,
                    august: 1189895,
                    september: 1207743,
                    october: 1225859,
                    november: 1244247,
                    december: 1262911
                },
                {
                    id: 9,
                    item: 'CoGS',
                    year: 2020,
                    last_12_months: 94272531,
                    january: 7228817,
                    february: 7337249,
                    march: 7447308,
                    april: 7559018,
                    may: 7672403,
                    jun: 7787489,
                    july: 7904301,
                    august: 8022866,
                    september: 8143209,
                    october: 8265357,
                    november: 8389337,
                    december: 8515177
                }
            ]
        };
        this._detectKey = this._detectKey.bind(this)
    }

    async componentDidMount() {
        document.addEventListener("keydown", this.escFunction, false);
        window.scrollTo(0, 0);
        this.drawCheckBoxes();
        this.setState({
            limit: this.state.data.length
        });
    }

    getMonthNumber = async (monthName) => {
        let monthsArray = [
            {
                name: 'january',
                number: 1
            },
            {
                name: 'february',
                number: 2
            },
            {
                name: 'march',
                number: 3
            },
            {
                name: 'april',
                number: 4
            },
            {
                name: 'may',
                number: 5,
            },
            {
                name: 'jun',
                number: 6
            },
            {
                name: 'july',
                number: 7
            },
            {
                name: 'august',
                number: 8
            },
            {
                name: 'september',
                number: 9
            },
            {
                name: 'october',
                number: 10
            },
            {
                name: 'november',
                number: 11
            },
            {
                name: 'december',
                number: 12
            }
        ];

        if (monthsArray.find(m => m.name === monthName) === undefined) {
            return null;
        } else {
            return monthsArray.find(m => m.name === monthName).number;
        }
    };

    handleChangeLimit = async (event) => {
        this.setState({
            limit: event
        });
    };

    handleChangeShowItem = async (id) => {
        let list = this.state.cols;
        let obj2remove = list.find(x => x.id === id);
        list.splice(list.findIndex(a => a.id === id), 1);
        if (obj2remove !== undefined) {
            let updatedObj = {};
            updatedObj = {
                id: id,
                keyName: obj2remove.keyName,
                show: !obj2remove.show
            };
            list.push(updatedObj)
        }
        list.sort(function (a, b) {
            return a.id - b.id || a.id.localeCompare(b.id);
        });
        this.setState({
            cols: list
        });
    };

    drawCheckBoxes = async () => {
        let keys = Object.keys(this.state.data[0]);
        keys.splice(keys.findIndex(a => a === 'id'), 1);
        keys.splice(keys.findIndex(a => a === 'year'), 1);
        let a = new Array(keys.length);
        for (let i = 0; i < 14; ++i) a[i] = {
            id: i,
            show: true,
            keyName: keys[i],
            // keyDisplayValue: this.state.data[0]['year'] + '-' + await this.getMonthNumber(keys[i]).number
        };
        this.setState({
            cols: a
        });
    };

    _handleChangeEntryValue = async(id, value, key) => {
        this.setState({
            elementId: id,
            entryValue: value,
            editActivated: true,
            keyValue: key
        });
        // setTimeout(() => {
        //     this.editorRef.focus();
        // }, 2500);
    };

    _updateTable = async() => {
        let arr = this.state.data;
        if (arr.length > 0) {
            let obj2Modify = arr.find(x => x.id === this.state.elementId);
            if (obj2Modify !== undefined) {
                if (obj2Modify.hasOwnProperty(this.state.keyValue)) {
                    if (obj2Modify[this.state.keyValue] !== this.state.entryValue) {
                        obj2Modify[this.state.keyValue] = this.state.entryValue;
                        arr.splice(arr.findIndex(a => a.id === this.state.elementId), 1);
                        arr.push(obj2Modify);
                        // arr.sort(function (a, b) {
                        //     return a.id - b.id || a.id.localeCompare(b.id);
                        // });
                        arr.sort(function (a, b) {
                            return a.id - b.id || a.id.localeCompare(b.id);
                        });
                        this.setState({
                            elementId: null,
                            editActivated: false
                        });
                        setTimeout(() => {
                            this.setState({
                                data: arr
                            });
                        }, 2500);
                        this.setState({
                            entryValue: null
                        });
                    }
                }
            }
        }
    };

    _detectKey = async(event) => {
        if (event.key !== undefined && event.key === 'Enter') {
            if (this.state.entryValue !== null && this.state.entryValue !== undefined) {
                await this._updateTable();
            } else {
                this.setState({
                    elementId: null,
                    entryValue: null,
                    editActivated: false
                });
            }
        } else if (event.key !== undefined && event.key === 'Escape') {
            this.setState({
                elementId: null,
                entryValue: null,
                editActivated: false
            });
        } else {}
    };

    render() {
        return (
            <div className="w3-container w3-margin" style={{padding: '28px 16px'}}>
                {/* Define row limit */}
                <div className={'w3-row'}>
                    <div className={'w3-third w3-margin'}>
                        <div className={'w3-card-4 w3-margin w3-padding'}>
                            <div className={"w3-container"}>
                                <h4>Rows to display</h4>
                                <p>Move the mouse over the button to open the dropdown.</p>
                                {this.state.limitOptions.length > 0 ? (
                                    <div className={"w3-dropdown-hover w3-margin w3-table"}>
                                        <button className={"w3-button w3-dark-gray"}>{this.state.limit} Rows will be
                                            shown.
                                        </button>
                                        <div className={"w3-dropdown-content w3-bar-block w3-border"}>
                                            {this.state.limitOptions.map((data, key) => {
                                                return (<button key={key} onClick={() => {
                                                    this.handleChangeLimit(data.i).then(r => {
                                                    })
                                                }} className={"w3-bar-item w3-button"}>{data.i}</button>)
                                            })}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                    {/* Define columns to show */}
                    <div className={'w3-rest w3-margin'}>
                        <div className={'w3-card-4 w3-margin w3-padding'} style={{
                            minHeight: 198
                        }}>
                            <div className={'w3-container'}>
                                <h4>Cols to display</h4>
                                {this.state.cols.map((data, key) => {
                                    return (<div id={data.id} key={key} style={{display: 'inline-block'}}
                                                 className={'w3-padding'}>
                                        <input className={"w3-check"} onChange={() => {
                                            this.handleChangeShowItem(data.id).then(r => {
                                            })
                                        }} type={"checkbox"}
                                               checked={data.show}/>
                                        <label>{data.keyName}</label></div>)
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'w3-rest'}>
                    <div className={"w3-container"}>
                        <h3>Data Table</h3>
                        <table className={'w3-table-all w3-small'}>
                            {this.state.cols.length > 0 ? (
                                <thead>
                                <tr>
                                    {this.state.cols.find(x => x.keyName === 'item' && x.show === true) !== undefined ? (
                                        <th>ITEM</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'last_12_months' && x.show === true) !== undefined ? (
                                        <th>last-12-months</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'january' && x.show === true) !== undefined ? (
                                        <th>01-2020</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'february' && x.show === true) !== undefined ? (
                                        <th>02-2020</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'march' && x.show === true) !== undefined ? (
                                        <th>03-2020</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'april' && x.show === true) !== undefined ? (
                                        <th>04-2020</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'may' && x.show === true) !== undefined ? (
                                        <th>05-2020</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'jun' && x.show === true) !== undefined ? (
                                        <th>06-2020</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'july' && x.show === true) !== undefined ? (
                                        <th>07-2020</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'august' && x.show === true) !== undefined ? (
                                        <th>08-2020</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'september' && x.show === true) !== undefined ? (
                                        <th>09-2020</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'october' && x.show === true) !== undefined ? (
                                        <th>10-2020</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'november' && x.show === true) !== undefined ? (
                                        <th>11-2020</th>
                                    ) : null}
                                    {this.state.cols.find(x => x.keyName === 'december' && x.show === true) !== undefined ? (
                                        <th>12-2020</th>
                                    ) : null}
                                </tr>
                                </thead>
                            ): null}

                            <tbody>
                            {this.state.data.slice(0, this.state.limit).map((data, key) => {
                                return (
                                    <tr key={key}>
                                        {this.state.cols.find(x => x.keyName === 'item' && x.show === true) ? (
                                            <td>{data.item}</td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'last_12_months' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.last_12_months, 'last_12_months').then(r => {})
                                            }}>
                                                {data.last_12_months}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'last_12_months'
                                                    });
                                                }}
                                                       // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'last_12_months'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>

                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'january' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.january, 'january').then(r => {})
                                            }}>
                                                {data.january}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'january'
                                                    });
                                                }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                        && this.state.keyValue === 'january'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'february' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.february, 'february').then(r => {})
                                            }}>
                                                {data.february}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'february'
                                                    });
                                                }}
                                                    // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'february'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'march' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.march, 'march').then(r => {})
                                            }}>
                                                {data.march}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'march'
                                                    });
                                                }}
                                                    // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'march'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'april' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.april, 'april').then(r => {})
                                            }}>
                                                {data.april}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'april'
                                                    });
                                                }}
                                                    // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'april'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'may' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.may, 'may').then(r => {})
                                            }}>
                                                {data.may}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'may'
                                                    });
                                                }}
                                                    // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'may'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'jun' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.jun, 'jun').then(r => {})
                                            }}>
                                                {data.jun}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'jun'
                                                    });
                                                }}
                                                    // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'jun'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'july' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.july, 'july').then(r => {})
                                            }}>
                                                {data.july}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'july'
                                                    });
                                                }}
                                                    // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'july'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'august' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.august, 'august').then(r => {})
                                            }}>
                                                {data.august}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'august'
                                                    });
                                                }}
                                                    // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'august'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'september' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.september, 'september').then(r => {})
                                            }}>
                                                {data.september}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'september'
                                                    });
                                                }}
                                                    // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'september'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'october' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.october, 'october').then(r => {})
                                            }}>
                                                {data.october}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'october'
                                                    });
                                                }}
                                                    // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'october'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'november' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.november, 'november').then(r => {})
                                            }}>
                                                {data.november}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'november'
                                                    });
                                                }}
                                                    // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'november'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'december' && x.show === true) ? (
                                            <td onClick={() => {
                                                this._handleChangeEntryValue(data.id, data.december, 'december').then(r => {})
                                            }}>
                                                {data.december}
                                                <input onChange={(v) => {
                                                    this.setState({
                                                        entryValue: v.target.value,
                                                        keyValue: 'december'
                                                    });
                                                }}
                                                    // ref={(input) => { this.editorRef = input; }}
                                                       onKeyDown={this._detectKey} className={"w3-input w3-animate-input"} type={"text"} style={{
                                                    display: this.state.elementId !== null
                                                    && this.state.keyValue === 'december'
                                                    && this.state.elementId === data.id ? 'block' : 'none'
                                                }} autoFocus/>
                                            </td>
                                        ) : null}
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TablePage;
