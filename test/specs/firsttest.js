describe('My Login application', () => {
    it('Login fail page title-saurav', () => {
        browser.url('/loginpagePractise/')
       // browser.windowHandleMaximize([windowHandle]);
        console.log(browser.getTitle())
        // browser.pause(3000)
        expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
        //xpath, css, linkText
        //---    tagname[attribute='value']  ->  input[name='username']
        // #id -> css    .classname _> CSS
        $("input[name='username']").setValue("rahulshettyacademy")
        $("#username").setValue("secondCSS")
        //--  //*[@attribute='value']   -> //input[@type='password']
        const password = $("//input[@type='password']")
        password.setValue("learning")
        $("#signInBtn").click()
        console.log($(".alert-danger").getText() + "is the text am seeing on the screen")
        //signing-dont checck   (Check after button turns to Sign In)
        browser.waitUntil(() => $("#signInBtn").getAttribute('value') === 'Sign In',
            { timeout: 4000, timeoutMsg: 'Error message did not appear' })
        console.log($(".alert-danger").getText() + "is the text am seeing on the screen")
        $("p").getText()
        expect($("p")).toHaveTextContaining("(username is rahulshettyacademy and Password is learning)")
    })
    it('Login Success', () => {
        browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        $("input[name='username']").setValue("rahulshettyacademy")
        const password = $("//input[@type='password']")
        password.setValue("learning")
        $("#signInBtn").click()
        const link = $("*=Checkout")
        link.waitForExist()
        expect(browser).toHaveTitle("ProtoCommerce")
        expect(browser).toHaveUrlContaining("shop")
    })
})