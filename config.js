const config = {
  "modalQuestions": [
    {
      "id": "getaway_frequency",
      "questionText": "How often do you find yourself needing a getaway or a staycation to recharge from your daily routine?",
      "options": [
        { "value": "daily", "text": "Daily" },
        { "value": "weekly", "text": "Weekly" },
        { "value": "monthly", "text": "Monthly" },
        { "value": "rarely", "text": "Rarely, but I often think about it" }
      ]
    },
    {
      "id": "weekend_activity",
      "questionText": "Which describes your typical weekend activity?",
      "options": [
        { "value": "local_cafes", "text": "Exploring local cafes or restaurants" },
        { "value": "outdoor_activities", "text": "Engaging in outdoor activities like hiking or cycling" },
        { "value": "wellness_spa", "text": "Indulging in wellness or spa sessions" },
        { "value": "stay_in", "text": "Staying in and catching up on work or chores" }
      ]
    },
    {
      "id": "self_care_preference",
      "questionText": "When planning your next self-care day, which of the following would you most likely choose?",
      "options": [
        { "value": "yoga_brunch", "text": "A yoga class followed by a nutritious brunch" },
        { "value": "spa_day", "text": "A day of pampering at a spa" },
        { "value": "nature_trip", "text": "An adventure day-trip exploring nature" },
        { "value": "quiet_home", "text": "A quiet day at home catching up on reading" }
      ]
    },
    {
      "id": "gift_card_use",
      "questionText": "If you received a gift card for a luxurious wellness experience, how would you most likely use it?",
      "options": [
        { "value": "share_special_occasion", "text": "Share it with a friend or loved one for a special occasion" },
        { "value": "use_promptly", "text": "Use it promptly for a much-needed break" },
        { "value": "save_for_stress", "text": "Save it for when I feel particularly stressed" },
        { "value": "redeem_vacation", "text": "Redeem it during an upcoming vacation" }
      ]
    }
  ],
  "giveaway": {
    "name": "Post-Stampede Nordic Spa Recharge",
    "heroHeadline": "Win a <span class='highlight'>$250 Nordic Spa Gift Card</span> to Relax After Stampede!",
    "heroSubheadline": "Take a break from your busy summer. Recharge your mind and body at Kananaskis Nordic Spa. Hurry – entry closes July 31st!",
    "promotionDates": "Enter from July 16 – July 31, 2025. Winner announced August 1st!",
    "endDate": "2025-07-31T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/wg02395201rmc0cqzc7ayt6nxg.jpg",
    "heroCtaText": "Enter to Win Now!",
    "entryFormCtaText": "Enter My Name Now!",
    "successModalHeaderText": "You're Entered to Win!",
    "successModalMainMessage": "Your name is in for the <strong>$250 Kananaskis Nordic Spa Gift Card</strong> giveaway! Check your email August 1st to find out if you’ve won. Good luck – and thanks for letting Amy help you relax and recharge.",
    "successModalEmailPrompt": "Watch your inbox on August 1st for winner news!"
  },
  "prize": {
    "name": "Kananaskis Nordic Spa Retreat Gift Card",
    "value": "$250 Value",
    "description": "Imagine slipping into warm pools, breathing in the mountain air, and letting your stress melt away. This <span class='highlight'>ultimate wellness sanctuary</span> $250 gift card lets you unwind, reset, and feel refreshed after your busy June and July.",
    "images": [
      { "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/ppmn0h709srme0cqzc7a0hh1w8.jpg", "alt": "Guest relaxing in a steaming pool at Kananaskis Nordic Spa" },
      { "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/36qvwdgsk9rma0cqzc7rqp8hhr.jpg", "alt": "Mountain views from the spa's outdoor pools" },
      { "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/5b4gndjtfsrme0cqzc7tqerf4m.jpg", "alt": "Happy guests enjoying hydrotherapy pools" },
      { "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/t5zfep4vt5rmc0cqzc7r7nrdxg.jpg", "alt": "Calm setting by the forest at Kananaskis Nordic Spa" }
    ],
    "includedItems": [
      { "icon": "fas fa-gift", "text": "$250 gift card to Kananaskis Nordic Spa" },
      { "icon": "fas fa-snowflake", "text": "Full access to pools, saunas, and relaxation areas" },
      { "icon": "fas fa-mountain", "text": "Gorgeous mountain views and peaceful setting" },
      { "icon": "fas fa-user-friends", "text": "Use the gift card for solo or shared wellness time" },
      { "icon": "fas fa-spa", "text": "Perfect for unwinding after a busy season" }
    ],
    "limitedTimeOfferText": "Don’t miss out – one lucky winner!",
    "ctaButtonText": "I Want to Recharge!"
  },
  "howToEnter": {
    "steps": [
      { "icon": "fas fa-edit", "title": "Fill Out the Quick Form", "description": "Share your name and email below. It only takes a moment." },
      { "icon": "fas fa-comments", "title": "Answer a Few Fun Questions", "description": "Tell us about what helps you recharge after life gets busy." },
      { "icon": "fas fa-check", "title": "You're In!", "description": "That's it – you're entered. Watch your email August 1st to see if you win!" }
    ],
    "highlights": [
      { "icon": "fas fa-stopwatch", "text": "Entry takes less than 1 minute" },
      { "icon": "fas fa-spa", "text": "Find your new favorite relaxation spot" },
      { "icon": "fas fa-gift", "text": "Completely free to enter" },
      { "icon": "fas fa-users", "text": "Perfect for busy moms and young professionals" },
      { "icon": "fas fa-star", "text": "Fair random draw" }
    ]
  },
  "entryForm": {
    "subtitle": "Enter below for your chance to win a spa day to relax and recharge!",
    "entryCountText": "Dozens have already entered – don’t wait, your chance is here!",
    "socialSharePrompt": "Love this prize? Share this page with friends and help them recharge too!",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Relax after the Stampede with a chance to win a $250 Kananaskis Nordic Spa gift card!")
    },
    "entryFormCtaText": "Enter My Name Now!"
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair and Square Winner Selection",
      "text": "We pick one winner at random from all entries received by July 31st. Everyone has an equal chance to win!"
    },
    "importantNotice": {
      "title": "Watch Your Email on August 1st!",
      "text": "The winner gets an email from amy@caughlinrealestate.ca. Please check your inbox and spam folder."
    },
    "faq": [
      { "q": "Who can enter this giveaway?", "a": "Anyone 18 or older living near Calgary or Springbank may enter. Perfect for anyone needing a break after a busy summer." },
      { "q": "How will I know if I win?", "a": "We contact the winner by email on August 1st. Be sure to check your inbox and spam folders." },
      { "q": "What can I use the gift card for?", "a": "Spend it at Kananaskis Nordic Spa for hydrotherapy pools, relaxation areas, and more." },
      { "q": "Is there any cost to enter?", "a": "No – entry is 100% free, no purchase needed." },
      { "q": "Can I give the gift card to someone else?", "a": "Yes, you can treat yourself or give the gift card to someone special." },
      { "q": "Do I have to use the spa right away?", "a": "No rush! The gift card is good until you’re ready to relax." }
    ],
    "tips": [
      "Double-check your email for accuracy",
      "Add amy@caughlinrealestate.ca to your contacts to get winner updates",
      "Tell your friends and enjoy relaxing moments after Stampede",
      "Follow us on Instagram and Facebook for prize updates"
    ]
  },
  "footerContact": {
    "organizerName": "Amy Caughlin Real Estate",
    "organizerLogoUrl": "",
    "secondaryLogoUrl": "",
    "secondaryLogoAlt": "Greater Property Group Logo",
    "email": "amy@caughlinrealestate.ca",
    "phone": "15874391618",
    "address": "5940 Macleod Trl SW #500, Calgary, AB T2H 2G4",
    "brokerageName": "Greater Property Group",
    "social": {
      "facebook": "https://www.facebook.com/caughlinrealestate/",
      "instagram": "https://www.instagram.com/caughlin.realestate/"
    },
    "agentContact": {
      "name": "Amy Caughlin",
      "title": "Realtor, Community Advocate",
      "phone": "15874391618",
      "email": "amy@caughlinrealestate.ca"
    },
    "copyrightOwner": "Amy Caughlin",
    "footerDisclaimer": "This giveaway is sponsored by Amy Caughlin of Greater Property Group and is not affiliated with Kananaskis Nordic Spa. Contest ends July 31, 2025. Winner chosen at random from all entries. Must be 18+ and live near Calgary or Springbank."
  },
  "meta": {
    "pageTitle": "Win a $250 Kananaskis Nordic Spa Gift Card – Relax & Recharge!",
    "navBrandLogoText": "Amy Caughlin",
    "privacyPolicyLink": "https://www.welpneedthis.com"
  },
  "settings": {
    "theme": "dark",
    "primaryColorOverride": "",
    "showCountdownInHero": true,
    "facebookPixelId": "1057475448873422",
    "salesGeniusAppApi": "",
    "followUpBossEmail": ""
  },
  "thankYouPage": {
    "pageTitle": "Thank You for Your Entry!",
    "headerText": "You’re Entered to Win!",
    "mainMessage": "Your name is in for the <strong>$250 Kananaskis Nordic Spa Gift Card</strong> giveaway! Check your email August 1st to find out if you’ve won. Good luck – and thanks for letting Amy help you relax and recharge.",
    "socialPromptText": "Want to help a friend relax too? Share this giveaway with them – you might both be spa buddies!"
  },
  "deploymentInfo": {
    "repoName": "Giveaway-260",
    "repoUrl": "https://github.com/arslvn93/Giveaway-260",
    "netlifyUrl": "http://Giveaway-260.netlify.app",
    "netlifyId": "1018209539"
  }
};