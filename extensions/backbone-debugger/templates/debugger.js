define(["underscore"],
function(_) {
    return () => `
<div class="container-fluid fill">
    <div class="tabbable tabs-left fill"> <!-- Only required for left/right tabs -->
        <ul class="nav nav-tabs mainTabs">

            <li id="appTitleTab"><p data-toggle="tab">Backbone Debugger</p></li>

            <li id="optionsTab" class="dropdown"><a class="dropdown-toggle"
                                                    data-toggle="dropdown"
                                                    href="#">
                Options
                <b class="caret caret-right"></b>
            </a>
                <ul class="dropdown-menu">
                    <!-- links -->
                    <li><a href="#restartAppInDebugMode">Restart in Debug Mode</a></li>
                    <li><a href="#stopDebugMode">Stop Debug Mode</a></li>
                </ul>
            </li>
            <li id="appRoutersTab"><a href="#appRouters" data-toggle="tab">Routers</a></li>
            <li id="appCollectionsTab"><a href="#appCollections" data-toggle="tab">Collections</a></li>
            <li id="appModelsTab"><a href="#appModels" data-toggle="tab">Models</a></li>
            <li id="appViewsTab" class="active"><a href="#appViews" data-toggle="tab">Views</a></li>

        </ul>

        <div class="tab-content fill mainTabsContent">
            <div class="tab-pane" id="appViews">
            </div>

            <div class="tab-pane" id="appModels">
            </div>

            <div class="tab-pane" id="appCollections">
            </div>

            <div class="tab-pane" id="appRouters">
            </div>
        </div>
    </div>
</div>
`;
});
