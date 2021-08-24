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

  def edit
    note = Note.find(params[:id])
    render component: "EditNote", props: {note: note}
  end

  def update
    note = Note.find(params[:id])
    if note.update(note_params)
      redirect_to notes_path
    else
    end
  end

  def destroy
    note = Note.find(params[:id]).delete
    redirect_to notes_path
  end

  private
  
  def note_params
    params.require(:note).permit(:title, :description)
  end

end
