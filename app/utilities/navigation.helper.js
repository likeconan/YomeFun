

class NavigationHelper {

    constructor() {
        this.swipeEnable = true;
    }

    toggleSwipeEnable = (val) => {
        this.swipeEnable = val;
    }
  

}

export default new NavigationHelper()