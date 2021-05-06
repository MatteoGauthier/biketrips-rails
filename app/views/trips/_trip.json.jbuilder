json.extract! trip, :id, :name, :distance, :likes, :author_id, :path, :created_at, :updated_at
json.url trip_url(trip, format: :json)
