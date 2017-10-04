<aura:application controller="TreeController" extends="force:slds">
   <ltng:require styles="{!$Resource.jqTree}" />
   <ltng:require scripts="{!join(',', $Resource.jquery,$Resource.tree)}"  afterScriptsLoaded="{!c.scriptsLoaded}"/>
   <div class="slds-box">
      <div class="slds-tree_container" role="application">
         <div id="tree1"></div>
      </div>
   </div>
</aura:application>