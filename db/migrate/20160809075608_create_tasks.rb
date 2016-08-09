class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.string :dsescription
      t.datetime :deadline
      t.integer :prioritet

      t.timestamps null: false
    end
  end
end
