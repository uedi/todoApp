const sampleGroups = [
    { id: '1', name: "Group 1" },
    { id: '2', name: "Group 2" },
    { id: '3', name: "Group 3" },
    { id: '4', name: "Group 4" },
    { id: '5', name: "Group 5" },
    { id: '6', name: "Group 6" },
    { id: '7', name: "Group 7" },
    { id: '8', name: "Group 8" },
    { id: '9', name: "Group 9" },
    { id: '10', name: "Group 10" },
    { id: '11', name: "Group 11" },
    { id: '12', name: "Group 12" },
    { id: '13', name: "Group 13" }
]

const getAll = async () => {
    return new Promise((resolve, rejenct) => {
        setTimeout(() => {
            resolve(sampleGroups)
        }, 3000)
    })
}

export default { getAll }