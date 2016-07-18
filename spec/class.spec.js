describe("Class Handler",function(){
	var classH;
	var	id;

	beforeEach(function(){
		classH = new ClassHandler();
		id = document.getElementById('container');
	})
	it("should add class {hello}" ,function(){
		classH.add(id,'hello');
		expect(classH.has(id,'hello')).toBe(true);
	})

	it("should remove class {className}",function(){
		classH.remove(id,'className');
		expect(classH.has(id,'className')).toBe(false);
	})

	it("should have not have class {hello}" , function(){
		expect(classH.has(id,'hello')).toBe(false);
	})
})
