class RequestAuthRegister {
	    constructor() {
	        this.email = "";
	        this.password = "";
	        this.id = 0;
	    }
	}

	class ResponseAuthRegister {
	    constructor() {
	        this.email = "Test";
	        this.password = "Test";
	        this.id = 0;
	    }
	}
	
	class RequestAuthAuthenticate {
	    constructor() {
	        this.user = "";
	        this.password = "";
	    }
	}

	class ResponseAuthAuthenticate {
	    constructor() {
	        this.token = "";
	    }
	}
	
	module.exports.ResponseAuthRegister = ResponseAuthRegister;
	module.exports.RequestAuthRegister = RequestAuthRegister;
	module.exports.RequestAuthAuthenticate = RequestAuthAuthenticate;
	module.exports.ResponseAuthAuthenticate = ResponseAuthAuthenticate;