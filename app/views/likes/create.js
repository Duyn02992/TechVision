$("#like_count").html('<%= @review.likes.count %> <%= (@review.likes.count) == 1 ? "Like" : "Likes" %>');
$("#a_like").html("<%= escape_javascript(render('reviews/like_delete')) %>");