# Multiuser Auction System
## Aim: This project is aimed at developing an attractive multi-user Auction System desktop application which would allow users to participate in an auction both as sellers and buyers. The application handles auctions running in parallel.
## TechStack: DBMS, XAMPP, SQL, PHP
## Features:
Sign Up for new users.
Login and logout for existing users.
On the seller side, users can add a product that they are willing to sell, its description, its image, price at which the bidding will start for their item and the time period for which they want the auction to remain live.
On the buyer side, the application displays a list of open auctions (displays details like product name, image base price, description, users who have made a bid) at the current time any of which the user may choose to enter to place his/her bid.
Latest price for each auction is be updated according to the bids that is received from the participants.
Seller can to track all of his items that are currently open for auction.
Seller cannot participate in his/her own auction.
User whose bid is at the top cannot bid until some other user bids at a higher price.
At the end of an auction, both the seller and the user that has placed the highest bid must be notified with some kind of notification and at that point the auction should be declared closed i.e. it should not be displayed in the list of open auctions.
Admin view that shows the result (product, buyer, seller, price) of all auctions till date.
