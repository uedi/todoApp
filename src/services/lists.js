let sampleLists = [
    { id: 1, name: "List 1" },
    { id: 2, name: "List 2" },
    { id: 3, name: "List 3" },
    { id: 4, name: "List 4" },
    { id: 5, name: "List 5" },
    { id: 6, name: "List 6" },
    { id: 7, name: "List 7" },
    { id: 8, name: "List 8" },
    { id: 9, name: "List 9" },
    { id: 10, name: "List 10" },
    { id: 11, name: "List 11" },
    { id: 12, name: "List 12" },
    { id: 13, name: "List 13" }
]

const getAll = async () => {
    return new Promise((resolve, rejenct) => {
        setTimeout(() => {
            resolve(sampleLists)
        }, 1000)
    })
}

const create = async (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const newId = sampleLists[sampleLists.length - 1].id + 1
            const newList = { id: newId, ...data }
            sampleLists = [...sampleLists, newList]
            resolve(newList)
        }, 2000)
    })
}

export default { getAll, create }