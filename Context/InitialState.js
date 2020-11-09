

var initialState ={
    appData: {
        name: 'Shappers'
    },
    userData: {
        token: '',
        limitedToken: '',
        groseryAPIID: 0,
        userID: 0,
        username: '',
        name: '',
        description: '',
        postsID: 0,
        reviewsID: 0,
        userIsViewingOthers: false,
        loggedIn: true,
        groserMode: false,
        imgPath: '',
        country: 0,
        dataBal: 0,
        totalAddtlData: 0,
        balance: 0,
        expenses: 0,
        rating: 0,
        numOfRaters: 0,
        blagssPassSet: false,
        passwordSet: false,
        position: {
            lat: 0,
            lng: 0
        },
        userViewed: {
            userExists: false,
            userID: 0,
            username: '',
            posts: [],
            name: '',
            country: 0,
            description: '',
            imgPath: '',
            reviewsID: 0,
            postsID: 0,
            rating: 0,
            numOfRaters: 0,
        },
        windowSize: 'SMALL',
        routerID: 0,
        creatingReview: false,
        wholeDivPadding: 100,
        usingWarningModal: false,
        warningMsg: '',
        confirmLogin: {
            reqID: 0,
            code: ''
        },
        currentPage: {
            front: 'login',
            back: 'home'
        },
        placingBid: false,
        gotUserData: false,
        sendMsg: {
            sending: false,
            username: ''
        },
        showingModal: false,
        showingYesNoModal: false,
        showingInfo: false,
        viewingMsgs: false,
        pageNum: 0,
        production: false,
        verification: {
            code: '',
            email: ''
        },
        isShappers: true
    },

    globals: {
        numOfItems: 0,
        numOfPosts: 0,
        varNames: {
            // devApi: 'http://localhost:5020/api/',
            devApi: 'http://192.168.1.3:5020/api/',
            apiPath: 'https://shappers.sosyal.ph/api/',
            // apiPath: 'http://192.168.1.7:5020/api/',
            // chatApiPath: 'http://localhost:5005/api/',
            blagsApiPath: 'http://192.168.1.3:9000/api/',
            // blagsApiPath: 'http://localhost:9000/api/',
            // adsApiPath: 'http://localhost:5000/api/',
            imgPath: 'http://localhost:9000/',
            itemsImgPath: 'http://localhost:9000/',
            blagsImgPath: 'http://localhost:9000/',
            // imgPath2: 'http://localhost:5020/',
            MOST_RECENT: 'MOST_RECENT',
            TAGS: 'TAGS',
            USER: 'USER',
            SMALL: 'SMALL',
            MEDIUM: 'MEDIUM',
            LARGE: 'LARGE',
            XSMALL: 'XSMALL'
        },
    },
    countries: [],
    messageData: {
        msgHeaders: [],
        msgs: [],
        viewingMsgs: false,
        headerIndexViewed: -1,
        headerIDViewed: 0
    },
    appModalData: {
        page: '',
        title: '',
        index: -1
    },
} 

export default initialState;