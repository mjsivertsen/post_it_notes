class NotesController < ApplicationController
  def index
    puts "index called"
    notes = Note.all
    render component: "Notes", props: {notes: notes}
  end

  def show
    note = Note.find(params[:id])
    render component: "Note", props: {note: note}
  end

  def new
    render component: "NewNote"
  end

  def create
    #this creates a note in memory
   note = Note.new(note_params)
   if note.save
    redirect_to notes_path
   else
    #handle invalid whatever here
   end
  end

  private
  
  def note_params
    params.require(:note).permit(:title, :description)
  end

end
