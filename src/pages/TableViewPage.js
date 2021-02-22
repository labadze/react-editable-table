import React, {Component} from 'react';


class TableViewPage extends Component {
    constructor(props) {
        super(props);
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
        // document.addEventListener("keydown", '', false);
        window.scrollTo(0, 0);
        this.drawCheckBoxes();
        this.setState({
            limit: this.state.data.length
        });
    }

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
                <div className={'w3-rest'}>
                    <div className={"w3-container"}>
                        <h3 className={'w3-center'}>DATA TABLE</h3>
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
                                            <td>
                                                {data.last_12_months}
                                            </td>

                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'january' && x.show === true) ? (
                                            <td>
                                                {data.january}
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'february' && x.show === true) ? (
                                            <td>
                                                {data.february}
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'march' && x.show === true) ? (
                                            <td>
                                                {data.march}
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'april' && x.show === true) ? (
                                            <td>
                                                {data.april}
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'may' && x.show === true) ? (
                                            <td>
                                                {data.may}
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'jun' && x.show === true) ? (
                                            <td>
                                                {data.jun}
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'july' && x.show === true) ? (
                                            <td>
                                                {data.july}
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'august' && x.show === true) ? (
                                            <td>
                                                {data.august}
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'september' && x.show === true) ? (
                                            <td>
                                                {data.september}
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'october' && x.show === true) ? (
                                            <td>
                                                {data.october}
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'november' && x.show === true) ? (
                                            <td>
                                                {data.november}
                                            </td>
                                        ) : null}
                                        {this.state.cols.find(x => x.keyName === 'december' && x.show === true) ? (
                                            <td>
                                                {data.december}
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

export default TableViewPage;
