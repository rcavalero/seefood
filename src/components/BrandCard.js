import React from "react";

var BrandCard = React.createClass({
  amazonRecsScript: function() {

    return '<div class="alignleft"> <script type="text/javascript">  amzn_assoc_placement = "adunit0"; amzn_assoc_search_bar = "true"; amzn_assoc_tracking_id = "sarkwon89-20";     amzn_assoc_ad_mode = "manual"; amzn_assoc_ad_type = "smart"; amzn_assoc_marketplace = "amazon"; amzn_assoc_region = "US"; amzn_assoc_title = "My Amazon Picks"; amzn_assoc_linkid = "c43adb62d8f81013cbdde7481af6d3ee"; amzn_assoc_asins = "B076TB6GW2,B009GFW8G4,B074H6X64W,B01J3TGH1E"; </script> <script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"> </script> </div>'

    // return '<div class="alignleft"> <script type="text/javascript"> amzn_assoc_ad_type = "banner"; amzn_assoc_marketplace = "amazon"; amzn_assoc_region = "US"; amzn_assoc_placement = "assoc_banner_placement_default"; amzn_assoc_campaigns = "kuft"; amzn_assoc_banner_type = "category"; amzn_assoc_p = "48"; amzn_assoc_isresponsive = "false"; amzn_assoc_banner_id = ID; amzn_assoc_width = "728"; amzn_assoc_height = "90"; amzn_assoc_tracking_id = "reater-20"; amzn_assoc_linkid = "asoc_linked"; </script> <script src="//z-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1"></script> </div>'
  },
  render: function() {
    return (
      <div >
        functionality data goes here....
        ...
        <div className='advertisement'>
          <div dangerouslySetInnerHTML={{__html: this.amazonRecsScript()}}></div> 
        </div>
      </div>
    );
  }
});

module.exports = BrandCard;