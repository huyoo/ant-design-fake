
const path="/api";

export default {
    [`${path}/list-page`]: {
        'data|1-10': [{
            'key|+1': 1,
            'name': '@cname',
            'age|10-50': 0,
            'address': '@city(true)'
        }]
    },
    [`${path}/getForm`]: {
        name: 1,
        value: 1
    }
}