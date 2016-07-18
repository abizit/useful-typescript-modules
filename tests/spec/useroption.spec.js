describe("User Options",function(){

	it("should create and object with default values" ,function(){
			var userOpt = new UserOptions();
			expect(userOpt).toEqual(jasmine.objectContaining({
				option:undefined
				_defaults = {
					optionone : 'hello'
				}
			}))
	})

})
