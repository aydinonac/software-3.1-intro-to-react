export default Page1;

function Page1() {
    const nums =[1,2,3,4,5];
	let newArr = nums.map(num => num * 10);
	return(newArr);
}
Page1()