import SearchRecordsConstant from '../constants/search.records.constant'
import api from '../utilities/api';

export function addSearchRecord(data) {
    api({
        url: '/search/records',
        method: 'POST',
        data: data
    })
}