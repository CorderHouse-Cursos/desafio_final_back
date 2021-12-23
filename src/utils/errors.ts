export class GeneralErrors extends Error {
	status = 500
	constructor(message: string) {
		super(message)
	}
}

export class NotFound extends GeneralErrors {
	constructor(message: string) {
		super(message)
		this.status = 404
	}
}

export class BadRequest extends GeneralErrors {
	constructor(message: string) {
		super(message)
		this.status = 400
	}
}

export class Unauthorized extends GeneralErrors {
	constructor(message: string) {
		super(message)
		this.status = 401
	}
}

export class Forbidden extends GeneralErrors {
	constructor(message: string) {
		super(message)
		this.status = 403
	}
}

export class InternalServerError extends GeneralErrors {
	constructor(message: string) {
		super(message)
		this.status = 500
	}
}
