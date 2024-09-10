const viewCodeBlockWithoutLogin = () => {
    // support func
    const showCodeContent = () => {
        const eleCodeContentBeHidden = document.getElementsByClassName("code-expandContent");
        if (!eleCodeContentBeHidden || eleCodeContentBeHidden.length === 0) return;
    
        for (let e of eleCodeContentBeHidden) {
            if (e instanceof HTMLElement) {
                e.style.maxHeight = 'fit-content';
            }
        }
    }

    const showQuoteContent = () => {
        const eleCodeContentBeHidden = document.getElementsByClassName("bbCodeBlock-expandContent");
        if (!eleCodeContentBeHidden || eleCodeContentBeHidden.length === 0) return;
    
        for (let e of eleCodeContentBeHidden) {
            if (e instanceof HTMLElement) {
                e.style.maxHeight = 'fit-content';
            }
        }
    }
    
    
    const removeLoginRedirect = () => {
        const expandButtons = document.getElementsByClassName("bbCodeBlock-expandLink");
        if (!expandButtons || expandButtons.length === 0) return;

        for (let e of expandButtons) {
            if (e instanceof HTMLElement) {
                e.style.display = 'none';
            }
        }
    }

    console.log("execute")
    // execute
    showCodeContent();
    removeLoginRedirect();
    showQuoteContent();
}
