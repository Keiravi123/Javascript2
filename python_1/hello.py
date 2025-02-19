def calculate_average_rating(ratings):
    average_rating = sum(ratings) / len(ratings)
    return average_rating

def does_cat_like_flavor(average_rating):
    if average_rating >= 6:
        return True
    else:
        return False

def display_message(likes_flavor):
    if likes_flavor:
        print("The cat loves the ice cream flavor!")
    else:
        print("The cat doesn't like the ice cream flavor...")

ice_cream_ratings = [8, 7, 9, 5, 6]

average_ice_cream_rating = calculate_average_rating(ice_cream_ratings)

cat_likes_flavor = does_cat_like_flavor(average_ice_cream_rating)

display_message(cat_likes_flavor)

for rating in ice_cream_ratings:
    if rating >= 7:
        print(f"This flavor with a rating of {rating} is liked by the cat.")
    else:
        print(f"This flavor with a rating of {rating} is not liked by the cat.")
