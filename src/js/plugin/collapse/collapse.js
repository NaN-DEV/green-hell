const toggleCollapseAll = document.querySelectorAll('[data-toggle="collapse"]');


if (toggleCollapseAll.length) {

    toggleCollapseAll.forEach(function (elem) {

        elem.addEventListener("click", function (event) {

            const elementCollapse = this;
            const collapseTarget = elementCollapse.dataset.target;
            const collapseClass = elementCollapse.classList;
            const startAccordion = elementCollapse.getAttribute('accordion-target');
            const startBodyCollapse = elementCollapse.getAttribute('body-collapse');

            let startBodyCollapseTrueOrFalse;


            if (startBodyCollapse == 'true') {
                startBodyCollapseTrueOrFalse = true;
            } else if (startBodyCollapse == 'false') {
                startBodyCollapseTrueOrFalse = false;
            }

            if (!!startAccordion) {

                const boxAccordion = document.getElementById(startAccordion);
                const allElementAccordion = boxAccordion.querySelectorAll('.collapse');
                const allTargetaccordion = document.querySelectorAll(`[accordion-target='${startAccordion}']`);



                allTargetaccordion.forEach(function (targetAcordion) {

                    targetAcordion.classList.remove('active');

                });

                allElementAccordion.forEach(function (elementAcordion) {

                    elementAcordion.classList.remove('active');

                });

            }

            // const toggleAccordionAtribute = toggleAccordion.attributes;


            if (!collapseTarget) return;



            collapseClass.toggle('active');

            const collapse = document.querySelector("#" + collapseTarget).classList;
            collapse.toggle('active');

            if (startBodyCollapseTrueOrFalse) {
                const collapseBody = document.body;
                collapseBody.classList.toggle('collapse-active');
            }
        });
    });
}