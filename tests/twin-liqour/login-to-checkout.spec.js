const { test, expect } = require("@playwright/test");

test("Login, Begin Shopping Mode, Add Product to Cart, Cart and Checkout", async ({ page }) => 
{
    test.setTimeout(500000); // Set timeout to 8 minutes for the entire test

    // =========================================================
    // 1. OPEN LOGIN PAGE
    // =========================================================

    await page.goto("https://twinb2b.com/login", { waitUntil: "commit", timeout: 30000});

    // Wait for login form
    await expect(page.getByRole("heading", { name: "Sign in", exact: true })).toBeVisible({ timeout: 15000 });

    // =========================================================
    // 2. HANDLE COOKIE BANNER
    // =========================================================

    const acceptCookies = page.getByRole("button", { name: "Accept All", exact: true});

    if (await acceptCookies.isVisible().catch(() => false)) {await acceptCookies.click();}

    // Handle welcome dialog if it appears
    const understandButton1 = page.getByRole("button", {name: "I understand",exact: true});

    if (await understandButton1.isVisible().catch(() => false)) {await understandButton1.click();}

    // Handle "Welcome To The New Twin B2B" popup if it appears
    const welcomePopup1 = page.getByRole("dialog", {name: "Welcome To The New Twin B2B"});
    
    if (await welcomePopup1.isVisible().catch(() => false)) 
        {
            const closeButton = welcomePopup1.getByRole("button", { name: "Close"});
            await closeButton.click();
        }

    // =========================================================
    // 3. ENTER LOGIN CREDENTIALS
    // =========================================================

    await page.getByRole("textbox", {name: "Email", exact: true}).fill("aman@cronixweb.com");

    await page.getByRole("textbox", {name: "Password", exact: true}).fill("WtZu~PTk47i:c5B");

    // =========================================================
    // 4. CLICK LOGIN
    // =========================================================

    await page.getByRole("button", {name: "Log in", exact: true}).click();

    // =========================================================
    // 5. VERIFY DASHBOARD
    // =========================================================

    await expect(page.getByRole("heading", { name: "Dashboard", exact: true})).toBeVisible({ timeout: 30000 });

    console.log(`Login successful. Current URL: ${page.url()}`);

    // =========================================================
    // 6. HANDLE "Welcome To The New Twin B2B" popup if it appears
    // =========================================================

    // Handle welcome dialog if it appears
    const understandButton2 = page.getByRole("button", {name: "I understand",exact: true});

    if (await understandButton2.isVisible().catch(() => false)) {await understandButton2.click();}

    // Handle cookie banner if it appears
    const acceptCookies1 = page.getByRole("button", {name: "Accept All",exact: true});

    if (await acceptCookies1.isVisible().catch(() => false)) {await acceptCookies1.click();}

    // Handle "Welcome To The New Twin B2B" popup if it appears
    const welcomePopup = page.getByRole("dialog", {name: "Welcome To The New Twin B2B"});
    
    if (await welcomePopup.isVisible().catch(() => false)) 
        {
            const closeButton = welcomePopup.getByRole("button", { name: "Close"});
            await closeButton.click();
        }

    // =========================================================
    // 7. SEARCH FOR "CRONIX TEST"
    // =========================================================
    
    const acceptCookies3 = page.getByRole("button", { name: "Accept All", exact: true});

    if (await acceptCookies3.isVisible().catch(() => false)) {await acceptCookies3.click();}

    // Handle welcome dialog if it appears
    const understandButton3 = page.getByRole("button", {name: "I understand",exact: true});

    if (await understandButton3.isVisible().catch(() => false)) {await understandButton3.click();}

    const companySearch = page.locator("//input[@id='super-admin-company-search']");

    // Handle "Welcome To The New Twin B2B" popup if it appears
    if (await welcomePopup.isVisible().catch(() => false))
        {
            const closeButton = welcomePopup.getByRole("button", { name: "Close"});
            await closeButton.click();
        }
    
    await expect(companySearch).toBeVisible({ timeout: 15000 });
    
    await companySearch.fill("Cronix test");
    
    console.log("Searched for Cronix test");
    
    // =========================================================
    // 8. SELECT "CRONIX TEST"
    // =========================================================
    
    const cronixTest = page.locator("//span[normalize-space()='Cronix Test Company']");
    
    await expect(cronixTest).toBeVisible({ timeout: 15000 });
    
    console.log("Cronix Test Company found, now clicking button");
    
    
    // =========================================================
    // 9. CLICK "BEGIN SHOPPING MODE"
    // =========================================================
    
    // Get the row containing the already filtered Cronix Test Company
    const cronixTestRow = cronixTest.locator("xpath=ancestor::tr");
    
    const beginShoppingMode = cronixTestRow.getByRole("button", {name: "Begin Shopping Mode",exact: true});
    
    await expect(beginShoppingMode).toBeVisible({ timeout: 15000 });
    
    await beginShoppingMode.click();
    
    console.log("Begin Shopping, Login as Super Admin Cronix Test User");

    // Wait for the new page/navigation to load
    await page.waitForLoadState("load");
    
    console.log("Shopping Mode page loaded");
    
    // Wait for network requests to settle
    await page.waitForLoadState("networkidle");
    
    console.log("Shopping Mode page is fully loaded");

    // =========================================================
    // 10. WAIT FOR SHOPPING MODE / PRODUCT PAGE
    // =========================================================

    // Handle welcome dialog if it appears
    const understandButton4 = page.getByRole("button", {name: "I understand",exact: true});

    if (await understandButton4.isVisible().catch(() => false)) {await understandButton4.click();}

    // Handle "Welcome To The New Twin B2B" popup if it appears
    if (await welcomePopup.isVisible().catch(() => false))
        {
            const closeButton = welcomePopup.getByRole("button", { name: "Close"});
            await closeButton.click();
        }

    await page.waitForLoadState("domcontentloaded");

    await page.evaluate(() => {window.scrollTo(0, 0);});

    await page.waitForTimeout(1000);

    console.log(`Shopping Mode is active - URL: ${page.url()}`);


    // =========================================================
    // 11. SEARCH PRODUCT
    // =========================================================

    const productName = "GLENDRONACH 18YR 700ML";
    
    //Search input
    const productSearch = page.getByRole("textbox", { name: "Search All Products", exact: true});
    
    await expect(productSearch).toBeVisible({ timeout: 30000});

    await expect(productSearch).toBeEnabled({ timeout: 30000});
    
    console.log("Header product search is visible");

    // Fill product name
    await productSearch.fill(productName);
    
    await expect(productSearch).toHaveValue(productName);
    
    console.log(`Product searched: ${productName}`);
    
    // =========================================================
    // 12. SUBMIT SEARCH FORM
    // =========================================================

    const searchForm = page.locator("form.search-form");
    
    await expect(searchForm).toBeVisible({timeout: 10000});
    
    console.log("Search form found");                                                                       
    
    const searchButton = searchForm.getByRole("button", {name: "Search", exact: true});

    await searchButton.click();

    console.log("Product search submitted");  

    // Allow the slow search/navigation to complete
    await page.waitForLoadState("networkidle", { timeout: 60000 }).catch(() => 
    {
        console.log("Network still active, continuing to wait for search results...");
    });

    // =========================================================
    // 13. WAIT FOR SEARCH RESULT / PRODUCT
    // =========================================================

    // Find the product card
    const productCard = page.locator("article.product-card").filter({ has: page.locator(".product-card__title-link").filter({ hasText: "Glendronach 18YR 700ML"})}).first();

    await page.waitForLoadState("domcontentloaded");

    await expect(productCard).toBeVisible({ timeout: 60000 });

    console.log("Search results loaded");

    console.log(`Current URL after search: ${page.url()}`); 

    if (page.url().includes("/super-admin")) {throw new Error("Product search redirected to /super-admin instead of showing search results.");}                                                        
    
    // =========================================================
    // 14. VERIFY PRODUCT RESULT
    // =========================================================

    await expect(productCard.locator(".product-card__title-link")).toHaveText("Glendronach 18YR 700ML");
    
    console.log(`Product "${productName}" found`);
    
    // =========================================================
    // 15. OPEN PRODUCT
    // =========================================================
    
    const productLink = productCard.locator("a.product-card__title-link");
    
    await expect(productLink).toBeVisible({timeout: 15000});
    
    await productLink.click();
    
    console.log("Product result clicked");
    
    // =========================================================
    // 16. VERIFY PRODUCT PAGE
    // =========================================================
    
    const productTitle1 = page.getByRole("heading", {level: 1}).first();

    await expect(productTitle1).toBeVisible({timeout: 20000});
    
    console.log(`Product Name: ${await productTitle1.innerText()}`);

    console.log(`Product Page URL: ${page.url()}`);                                                              

    // =========================================================
    // 17. CLICK ADD TO CART
    // =========================================================

    const addToCartButton = page.locator("//button[contains(@class, 'pdp-form__add-to-cart')]");

    await expect(addToCartButton).toBeVisible({timeout: 15000});

    await addToCartButton.click();

    // Handle the "Continue Without Preferences" dialog which appears after adding a product to the cart
    const continueWithoutPreferences = page.locator("//div[@role='dialog' and contains(@class, 'cart-substitution')]//button[normalize-space()='Continue Without Preferences']");

    await expect(continueWithoutPreferences).toBeVisible({ timeout: 30000 });
    
    await continueWithoutPreferences.scrollIntoViewIfNeeded();
    
    await page.waitForTimeout(1000);
    
    await continueWithoutPreferences.click({ force: true });
    
    console.log("Clicked Continue Without Preferences");

    console.log("Product added to cart");

    // =========================================================
    // 18. CLICK CART ICON
    // =========================================================
    
    // Replace the XPath below with the actual Cart icon XPath
    const cartIcon = page.locator("//button[@aria-label='Cart']");
    
    await expect(cartIcon).toBeVisible({timeout: 15000});
    
    await cartIcon.click();
    
    console.log("Cart icon clicked");                                                                   
    
    // =========================================================
    // 19. VERIFY CART DRAWER
    // =========================================================
    
    const cartDrawer = page.locator('//div[@role="dialog"]');
    
    await expect(cartDrawer).toBeVisible({timeout: 15000});
    
    console.log("Cart drawer is visible");

    // =========================================================
    // 20. VERIFY PRODUCT IN CART DRAWER
    // =========================================================

    await expect(cartDrawer).toContainText("Glendronach 18YR 700ML");

    console.log("Product verified in cart drawer");

    // =========================================================
    // 21. VERIFY QUANTITY
    // =========================================================

    await expect(cartDrawer).toContainText("1");

    console.log("Quantity verified as 1");

    // =========================================================
    // 22. OPEN CART PAGE
    // =========================================================

    const viewCartButton = cartDrawer.locator("//a[contains(@class, 'button button--secondary')]");

    await expect(viewCartButton).toBeVisible({timeout: 10000});

    await viewCartButton.click();

    // =========================================================
    // 23. VERIFY CART PAGE
    // =========================================================

    await page.waitForLoadState("domcontentloaded");

    await expect(page).toHaveURL(/\/cart/);

    console.log(`Cart Page URL: ${page.url()}`);

    // =========================================================
    // 24. VERIFY PRODUCT ON CART PAGE
    // =========================================================

    await expect(page.getByText("Glendronach 18YR 700ML", { exact: true})).toBeVisible({timeout: 15000});

    console.log("Product verified on Cart Page");

    // =========================================================
    // 25. VERIFY CART QUANTITY
    // =========================================================

    await expect(page.locator("main")).toContainText("1");

    console.log("Cart quantity verified");

    // =========================================================
    // 26. CLICK CHECKOUT
    // =========================================================

    const checkoutButton = page.getByRole("button", {name: /Checkout/i});

    await expect(checkoutButton).toBeVisible({timeout: 10000});

    await checkoutButton.click();

    console.log("Checkout button clicked");

    // =========================================================
    // 27. VERIFY CHECKOUT PAGE
    // =========================================================

    await page.waitForLoadState("domcontentloaded");

    console.log(`Checkout URL: ${page.url()}`);

    // Make sure we are no longer on the cart page
    await expect(page).not.toHaveURL(/\/cart/);

    console.log("Checkout page opened successfully");

    // =========================================================
    // 28. VERIFY CHECKOUT CONTENT
    // =========================================================

    await expect(page.getByText(/Checkout|Shipping|Contact information/i).first()).toBeVisible({timeout: 15000});

    console.log("Checkout page verified");
});