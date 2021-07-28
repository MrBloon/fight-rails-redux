# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_28_125430) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "equipment", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "user_id"
    t.integer "quantity", default: 0
    t.string "description"
    t.string "equipment_type"
    t.index ["user_id"], name: "index_equipment_on_user_id"
  end

  create_table "fight_equipments", force: :cascade do |t|
    t.bigint "equipment_id", null: false
    t.bigint "fight_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["equipment_id"], name: "index_fight_equipments_on_equipment_id"
    t.index ["fight_id"], name: "index_fight_equipments_on_fight_id"
  end

  create_table "fights", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "hero_fights", force: :cascade do |t|
    t.bigint "fight_id", null: false
    t.bigint "hero_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["fight_id"], name: "index_hero_fights_on_fight_id"
    t.index ["hero_id"], name: "index_hero_fights_on_hero_id"
  end

  create_table "heros", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.string "name"
    t.integer "hit_points", default: 10
    t.boolean "foe", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "level", default: 1
    t.string "hero_class"
    t.integer "experience", default: 0
    t.index ["user_id"], name: "index_heros_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "gold", default: 0
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "equipment", "users"
  add_foreign_key "fight_equipments", "equipment"
  add_foreign_key "fight_equipments", "fights"
  add_foreign_key "hero_fights", "fights"
  add_foreign_key "hero_fights", "heros"
  add_foreign_key "heros", "users"
end
