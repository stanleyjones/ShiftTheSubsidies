# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110919182251) do

  create_table "entities", :force => true do |t|
    t.string   "name",       :null => false
    t.string   "kind"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "entity_groups", :id => false, :force => true do |t|
    t.integer "group_id",  :null => false
    t.integer "member_id", :null => false
  end

  create_table "institution_groups", :force => true do |t|
    t.string   "name",       :null => false
    t.string   "country"
    t.string   "region"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "institutions", :force => true do |t|
    t.string   "name",                                    :null => false
    t.string   "abbreviation"
    t.string   "kind"
    t.integer  "fiscal_year",          :default => 1
    t.boolean  "visible",              :default => false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "institution_group_id"
    t.string   "description",          :default => ""
  end

  create_table "projects", :force => true do |t|
    t.string   "name",                             :null => false
    t.string   "country"
    t.text     "description"
    t.text     "notes"
    t.integer  "sector_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "energy_access", :default => false
  end

  create_table "sectors", :force => true do |t|
    t.string   "name",        :null => false
    t.string   "category"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "description"
    t.string   "slug"
  end

  create_table "subsidies", :force => true do |t|
    t.integer  "amount_usd",      :limit => 8
    t.string   "currency",                     :default => "USD"
    t.date     "date",                                            :null => false
    t.integer  "institution_id"
    t.integer  "entity_id"
    t.integer  "project_id"
    t.string   "kind"
    t.boolean  "approved",                     :default => false
    t.string   "source"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "amount_original", :limit => 8
  end

  create_table "users", :force => true do |t|
    t.string   "name",            :null => false
    t.string   "hashed_password", :null => false
    t.string   "salt",            :null => false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
