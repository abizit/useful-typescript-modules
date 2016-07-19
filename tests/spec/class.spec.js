describe("Class Handler",function(){
	var classH;
	var	id;

	beforeEach(function(){
		classH = new ClassHandler();
		id = document.getElementById('container');
	})
	it("should add class {testClass}" ,function(){
		classH.add(id,'testClass, asdf');
		expect(classH.has(id,'testClass')).toBe(true);
	})

	it("should remove class {className}",function(){
		classH.remove(id,'className');
		expect(classH.has(id,'className')).toBe(false);
	})

	it("should not have class {hello}" , function(){
		expect(classH.has(id,'hello')).toBe(false);
	})

	it("{inputHandler} should return an object" ,function(){
		var classes = 'class1, class2, class3';
		expect(ClassHandler.inputCheck(classes)).toEqual(
			jasmine.objectContaining(["class1","class2","class3"])
		)
	})
	

})
