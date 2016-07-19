describe("Class Handler",function(){
	var classH;
	var	id;

	beforeEach(function(){
		classH = new ClassHandler();
		id = document.getElementById('container');
	})
	it("should add single class {testClass}" ,function(){
		classH.add(id,'testClass');
		expect(classH.has(id,'testClass')).toBe(true);
	})
	it("should add multiple class {testClass, testClass2}" ,function(){
		classH.add(id,'testClass,testClass2');
		expect(classH.has(id,'testClass')).toBe(true);
		expect(classH.has(id,'testClass2')).toBe(true);
	})

	it("should throw an Error ['Input Error: Space between class names. Sperate class names with comma(,) only']" ,function(){
		expect(classH.add(id,'testClass, testClass2')).toEqual("Input Error: Space between class names. Sperate class names with comma(,) only");
	})

	it("should remove single class {className}",function(){
		classH.remove(id,'testClass');
		expect(classH.has(id,'testClass')).toBe(false);
	})
	it("should add multiple class {testClass, testClass2}" ,function(){
		classH.remove(id,'testClass,testClass2');
		expect(classH.has(id,'testClass')).toBe(false);
		expect(classH.has(id,'testClass2')).toBe(false);
	})	

	it("should not have class {hello}" , function(){
		expect(classH.has(id,'hello')).toBe(false);
	})

	it("{inputHandler} should return an object" ,function(){
		var correctclass = 'class';
		expect(ClassHandler.inputCheck(correctclass)).toEqual(
			jasmine.objectContaining(["class"])
		)
		var commaclass = 'class1,class2,class3';
		expect(ClassHandler.inputCheck(commaclass)).toEqual(
			jasmine.objectContaining(["class1","class2","class3"])
		)
		var incorrectclass = 'class1 class2,class3';
		expect(ClassHandler.inputCheck(incorrectclass)).toEqual(
			jasmine.objectContaining(["class1 class2","class3"])
		)
	})
})
