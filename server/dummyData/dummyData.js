const chats = [
    {
        isGroupChat: false,
        users: [
            {
                name: 'Da Heung',
                chattifId: '#9834',
            },
            {
                name: 'Me TheCreator',
                chattifId: '#6536',
            }
        ],
        chatId: '9bc1ef9c-6719-4041-afd3-c5b87c90690d',
        chatName: 'Da Heung',
    }, 
    {
        isGroupChat: true,
        users: [
            {
                name: 'Sha Shasha',
                chattifId: '#4321',
            },
            {
                name: 'Tzu Yu',
                chattifId: '#5674',
            },
            {
                name: 'John Yeon',
                chattifId: '#4321',
            },
            {
                name: 'Na Yeon', 
                chattifyId: '#4567',
            }
        ],
        chatId: '8cb3ebb8-30f9-11e5-a151-feff819cdc9f',
        chatName: 'Sisters',
        groupAdmin: { 
            name: 'Na Yeon', 
            chattifyId: '#4567',
        },
    },
    {
        isGroupChat: true,
        users: [
            {
                name: 'Chae Yung',
                chattifId: '#5421',
            },
            {
                name: 'Tzu Yu',
                chattifId: '#5674',
            },
            { 
                name: 'Da Heung', 
                chattifyId: '#9834',
            }
        ],      
        chatId: '6d8s98d8f78d8-87d8f89d-d8f8s78fd0-fg',
        chatName: 'Maknaes',
        groupAdmin: { 
            name: 'Da Heung', 
            chattifyId: '#9834',
        },
    }
    
]

module.exports = { chats };