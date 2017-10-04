({
    scriptsLoaded: function(component, event, helper) {
        //alert();

        var action = component.get("c.getAcc");
        var self = this;
        action.setCallback(this, function(actionResult) {
            var data = [];

            for (var i = 0; i < actionResult.getReturnValue().length; i++) {

                var children = [];
                if (actionResult.getReturnValue()[i].Contacts != undefined) {
                    for (var j = 0; j < actionResult.getReturnValue()[i].Contacts.length; j++) {
                        children.push({
                            name: actionResult.getReturnValue()[i].Contacts[j].LastName
                        });

                    }
                }
                var eachAccount = {
                    name: actionResult.getReturnValue()[i].Name,
                    children: children
                };
                data.push(eachAccount);
            }
            $('#tree1').tree({
                data: data
            });
        });
        $A.enqueueAction(action);

    }
})